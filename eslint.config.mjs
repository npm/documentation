import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import primerReactPlugin from 'eslint-plugin-primer-react'
import importPlugin from 'eslint-plugin-import'
import * as mdxPlugin from 'eslint-plugin-mdx'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

// Fix globals with trailing whitespace (known issue in some versions)
const fixGlobals = obj => {
  const fixed = {}
  for (const [key, value] of Object.entries(obj)) {
    fixed[key.trim()] = value
  }
  return fixed
}

const forbiddenElements = [
  'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'audio', 'b', 'base',
  'basefont', 'bdi', 'bdo', 'big', 'blink', 'br', 'button', 'canvas', 'caption',
  'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd',
  'del', 'details', 'dfn', 'dialog', 'dir', 'dl', 'dt', 'element', 'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'hgroup', 'hr', 'i', 'input', 'ins',
  'isindex', 'kbd', 'keygen', 'label', 'legend', 'listing', 'map', 'mark', 'menu',
  'menuitem', 'meter', 'noembed', 'noscript', 'object', 'ol', 'optgroup', 'option',
  'output', 'param', 'plaintext', 'progress', 'q', 'rp', 'rt', 'rtc', 'ruby', 's',
  'samp', 'script', 'section', 'select', 'shadow', 'small', 'source', 'spacer',
  'span', 'strike', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td',
  'template', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'var',
  'video', 'wbr', 'xmp',
]

const mdxGlobals = {
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
}

export default [
  // Global ignores
  {
    ignores: ['.cache/', 'public/', 'node_modules/'],
  },

  // Base JS config
  js.configs.recommended,

  // React recommended
  reactPlugin.configs.flat.recommended,

  // Prettier (must be last to override formatting rules)
  prettierConfig,

  // Global settings for React version detection
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Base config for JS/MJS files
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...fixGlobals(globals.browser),
        ...fixGlobals(globals.node),
      },
    },
    plugins: {
      'primer-react': primerReactPlugin,
      'react-hooks': reactHooksPlugin,
      'import': importPlugin,
    },
    rules: {
      'max-len': 'off',
      'react/prop-types': 'off',
      // Rules from react-app config
      'array-callback-return': 'warn',
      'eqeqeq': ['warn', 'smart'],
      'no-eval': 'warn',
      'no-implied-eval': 'warn',
      'no-loop-func': 'warn',
      'no-self-compare': 'warn',
      'no-throw-literal': 'warn',
      // Import plugin rules
      'import/first': 'error',
      'import/no-amd': 'error',
      // primer-react rules
      'primer-react/direct-slot-children': 'error',
      'primer-react/no-system-props': ['error', { includeUtilityComponents: true }],
      'primer-react/a11y-tooltip-interactive-trigger': 'error',
      'primer-react/new-color-css-vars': 'error',
      'primer-react/a11y-explicit-heading': 'error',
      'primer-react/no-deprecated-props': 'warn',
      'primer-react/a11y-remove-disable-tooltip': 'error',
      'primer-react/a11y-use-accessible-tooltip': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Test files - add jest globals
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...fixGlobals(globals.jest),
      },
    },
  },

  // src/shared.js specific rules
  {
    files: ['src/shared.js'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },

  // MDX files - use the flat config with custom globals
  {
    ...mdxPlugin.flat,
    files: ['**/*.mdx'],
    languageOptions: {
      ...mdxPlugin.flat.languageOptions,
      globals: {
        ...mdxPlugin.flat.languageOptions?.globals,
        ...mdxGlobals,
      },
    },
    rules: {
      ...mdxPlugin.flat.rules,
      'no-irregular-whitespace': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-key': 'off',
      'react/jsx-no-undef': 'off', // Components are provided globally by gatsby-plugin-mdx
    },
  },

  // Forbidden elements for MDX, shared.js, and src/**/*.js
  {
    files: ['**/*.mdx', 'src/shared.js', 'src/**/*.js'],
    rules: {
      'react/forbid-elements': [
        'error',
        {
          forbid: forbiddenElements,
        },
      ],
    },
  },
]
