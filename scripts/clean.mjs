#!/usr/bin/env node

import {rm} from 'node:fs/promises'
import {join} from 'node:path'
import {fileURLToPath} from 'node:url'

const ROOT = join(fileURLToPath(import.meta.url), '..', '..')

await rm(join(ROOT, 'public'), {recursive: true, force: true})
