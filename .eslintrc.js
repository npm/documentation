const {getGlobals} = require('eslint-plugin-mdx')

module.exports = {
  root: true,
  ignorePatterns: ['.cache/', 'public/'],
  plugins: ['primer-react'], // github plugin now comes from flat config
  extends: [
    '@npmcli',
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:github/react',  // REMOVED: now handled by flat config
    'plugin:react-hooks/recommended',
    'prettier',
  ],
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
    'primer-react/a11y-use-next-tooltip': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:import/recommended'],
    },
    {
      files: ['src/shared.js'],
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      files: ['*.mdx'],
      plugins: ['mdx', 'prettier'],
      extends: ['plugin:mdx/recommended'],
      parserOptions: {
        sourceType: 'module',
      },
      globals: getGlobals(['Index', 'Note', 'Prompt', 'Screenshot', 'Link', 'YouTube']),
      settings: {
        'import/resolver': 'webpack',
      },
      rules: {
        'no-irregular-whitespace': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      files: ['*.mdx', 'src/shared.js', 'src/**/*.js'],
      rules: {
        'react/forbid-elements': [
          'error',
          {
            // See https://github.com/npm/documentation/pull/791
            // https://gist.githubusercontent.com/cecchi/99772a8483914b112400/raw/bcaecc4ba809caec518158bb46f9dead456ae5da/html-tags.json
            forbid: [
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
              'div',
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
              'header',
              'hgroup',
              'hr',
              // used in head
              // 'html',
              'i',
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
              'main',
              'map',
              'mark',
              'menu',
              'menuitem',
              'meter',
              'nav',
              'noembed',
              'noscript',
              'object',
              'ol',
              'optgroup',
              'option',
              'output',
              'p',
              'param',
              'plaintext',
              'pre',
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
              'ul',
              'var',
              'video',
              'wbr',
              'xmp',
            ],
          },
        ],
      },
    },
  ],
}
