#!/usr/bin/env node

// Builds the site, serves it, and rebuilds it whenever the content or the
// theme changes.

import {spawn} from 'node:child_process'
import {watch} from 'node:fs'
import {join} from 'node:path'
import {fileURLToPath} from 'node:url'

const ROOT = join(fileURLToPath(import.meta.url), '..', '..')
const WATCHED = ['content', 'src', 'static', 'doc-kit.config.mjs']

let building = null
let pending = false

const build = () => {
  if (building) {
    pending = true
    return
  }

  console.log('Building the documentation...')

  building = new Promise(resolve => {
    const child = spawn(
      process.execPath,
      [join(ROOT, 'node_modules', '@doc-kit', 'cli', 'bin', 'cli.mjs'), 'generate'],
      {
        cwd: ROOT,
        stdio: 'inherit',
      },
    )
    child.on('exit', code => {
      if (code !== 0) {
        console.error(`The build failed (exit code ${code})`)
      }
      resolve()
    })
  }).then(() => {
    building = null
    if (pending) {
      pending = false
      build()
    }
    return null
  })
}

let timeout
const rebuild = () => {
  clearTimeout(timeout)
  timeout = setTimeout(build, 200)
}

for (const path of WATCHED) {
  try {
    watch(join(ROOT, path), {recursive: true}, rebuild)
  } catch (err) {
    console.warn(`Not watching ${path}: ${err.message}`)
  }
}

build()

spawn(process.execPath, [join(ROOT, 'scripts', 'serve.mjs'), join(ROOT, 'public')], {cwd: ROOT, stdio: 'inherit'})
