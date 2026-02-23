import {defineConfig} from 'eslint/config'
import {fixupPluginRules} from '@eslint/compat'
import js from '@eslint/js'
import globals from 'globals'

// Trim whitespace from globals keys (known issue in the globals package)
function trimGlobals(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.trim(), v]))
}

// Plugins with flat config support
import prettier from 'eslint-config-prettier/flat'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import pluginImport from 'eslint-plugin-import'
import pluginPromise from 'eslint-plugin-promise'
import * as pluginMdx from 'eslint-plugin-mdx'

// Load primer-react rules individually to avoid @typescript-eslint/utils
// incompatibility with ESLint v10 (eslint-plugin-primer-react's index.js
// imports rules that depend on a removed ESLint internal class)
import {createRequire} from 'module'
const require = createRequire(import.meta.url)
const primerReactRules = {
  'direct-slot-children': require('eslint-plugin-primer-react/src/rules/direct-slot-children'),
  'no-system-props': require('eslint-plugin-primer-react/src/rules/no-system-props'),
  'a11y-tooltip-interactive-trigger': require('eslint-plugin-primer-react/src/rules/a11y-tooltip-interactive-trigger'),
  'new-color-css-vars': require('eslint-plugin-primer-react/src/rules/new-color-css-vars'),
  'a11y-explicit-heading': require('eslint-plugin-primer-react/src/rules/a11y-explicit-heading'),
  'no-deprecated-props': require('eslint-plugin-primer-react/src/rules/no-deprecated-props'),
  'a11y-remove-disable-tooltip': require('eslint-plugin-primer-react/src/rules/a11y-remove-disable-tooltip'),
  'a11y-use-accessible-tooltip': require('eslint-plugin-primer-react/src/rules/a11y-use-accessible-tooltip'),
}
const pluginPrimerReact = {rules: primerReactRules}

const forbiddenElements = [
  'abbr',
  'acronym',
  'address',
  'applet',
  'area',
  'article',
  'audio',
  'b',
  'base',
  'basefont',
  'bdi',
  'bdo',
  'big',
  'blink',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'content',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'dir',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'div',
  'dl',
  'dt',
  'element',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'header',
  'hgroup',
  'hr',
  // used in head
  // 'html',
  'i',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'iframe',
  'input',
  'ins',
  'isindex',
  'kbd',
  'keygen',
  'label',
  'legend',
  // ok because there is no mdx replacement and styles are provided via parent ul/ol
  // 'li',
  'listing',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meter',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'nav',
  'noembed',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'p',
  'param',
  'plaintext',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'shadow',
  'small',
  'source',
  'spacer',
  'span',
  'strike',
  // ok since there is no mdx replacement
  // 'strong'
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'tfoot',
  'th',
  'thead',
  'time',
  // used in head
  // 'title',
  'tr',
  'track',
  'tt',
  'u',
  // ok because Box is deprecated and styles are provided via CSS modules
  // 'ul',
  'var',
  'video',
  'wbr',
  'xmp',
]

export default defineConfig([
  // Ignore patterns (replaces ignorePatterns)
  {
    ignores: ['.cache/', 'public/'],
  },

  // ESLint recommended
  js.configs.recommended,

  // Import plugin (flat config) - only for JS files (matching original override)
  {
    ...pluginImport.flatConfigs.recommended,
    files: ['**/*.js', '**/*.mjs'],
  },

  // Promise plugin (flat config, replaces @npmcli)
  pluginPromise.configs['flat/recommended'],

  // React recommended (flat config)
  pluginReact.configs.flat.recommended,

  // React hooks - only rules matching original eslint-config-react-app
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Prettier config (disables conflicting rules) - must be last in extends
  prettier,

  // Base config with language options, primer-react plugin, and rules
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...trimGlobals(globals.browser),
        ...trimGlobals(globals.node),
      },
    },
    plugins: {
      'primer-react': pluginPrimerReact,
    },
    rules: {
      'max-len': 'off',
      'react/prop-types': 'off',
      'primer-react/direct-slot-children': 'error',
      'primer-react/no-system-props': ['error', {includeUtilityComponents: true}],
      'primer-react/a11y-tooltip-interactive-trigger': 'error',
      'primer-react/new-color-css-vars': 'error',
      'primer-react/a11y-explicit-heading': 'error',
      'primer-react/no-deprecated-props': 'warn',
      'primer-react/a11y-remove-disable-tooltip': 'error',
      'primer-react/a11y-use-accessible-tooltip': 'error',
    },
    settings: {
      react: {
        version: '19',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },

  // Override: src/shared.js
  {
    files: ['src/shared.js'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },

  // Override: *.mdx files - MDX recommended (flat) with fixup for ESLint v10
  {
    ...pluginMdx.flat,
    plugins: {
      mdx: fixupPluginRules(pluginMdx),
    },
  },
  {
    files: ['**/*.mdx'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        Index: 'readonly',
        Note: 'readonly',
        Prompt: 'readonly',
        Screenshot: 'readonly',
        Link: 'readonly',
        YouTube: 'readonly',
        DataTable: 'readonly',
        InlineCode: 'readonly',
        Strikethrough: 'readonly',
        CliLink: 'readonly',
      },
    },
    settings: {
      'import/resolver': 'webpack',
    },
    rules: {
      'no-irregular-whitespace': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-key': 'off',
      'react/jsx-no-undef': ['error', {allowGlobals: true}],
    },
  },

  // Override: forbid HTML elements in mdx, shared.js, and src/**/*.js
  {
    files: ['**/*.mdx', 'src/shared.js', 'src/**/*.js'],
    rules: {
      'react/forbid-elements': [
        'error',
        {
          // See https://github.com/npm/documentation/pull/791
          forbid: forbiddenElements,
        },
      ],
    },
  },

  // Override: test files - add jest globals
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
])
