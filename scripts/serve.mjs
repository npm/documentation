#!/usr/bin/env node

// Serves the built site from `public/` the way GitHub Pages does: `/foo`
// serves `foo.html` or `foo/index.html`, and unknown paths get `404.html`.

import {createReadStream} from 'node:fs'
import {stat} from 'node:fs/promises'
import {createServer} from 'node:http'
import {extname, join, normalize, resolve} from 'node:path'

const ROOT = resolve(process.argv[2] ?? 'public')
const PORT = Number(process.env.PORT ?? 8000)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
}

const isFile = path =>
  stat(path).then(
    s => s.isFile(),
    () => false,
  )

const isDirectory = path =>
  stat(path).then(
    s => s.isDirectory(),
    () => false,
  )

const send = (res, file, status = 200) => {
  res.writeHead(status, {'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream'})
  createReadStream(file).pipe(res)
}

const server = createServer(async (req, res) => {
  const {pathname} = new URL(req.url, 'http://localhost')
  const path = decodeURIComponent(pathname)
  const safe = normalize(path).replace(/^(\.\.(\/|\\|$))+/, '')
  const file = join(ROOT, safe)

  if (await isFile(file)) {
    return send(res, file)
  }

  if (await isDirectory(file)) {
    if (!path.endsWith('/')) {
      res.writeHead(301, {Location: `${path}/`})
      return res.end()
    }
    const index = join(file, 'index.html')
    if (await isFile(index)) {
      return send(res, index)
    }
  } else if (await isFile(`${file}.html`)) {
    return send(res, `${file}.html`)
  }

  const notFound = join(ROOT, '404.html')
  if (await isFile(notFound)) {
    return send(res, notFound, 404)
  }

  res.writeHead(404, {'Content-Type': 'text/plain'})
  res.end('Not found')
})

server.listen(PORT, () => {
  console.log(`Serving ${ROOT} at http://localhost:${PORT}`)
})
