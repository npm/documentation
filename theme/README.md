# theme

This theme is a simple fork of the excellent gatsby-theme-doctocat included in primer's [primer.style/doctocat](https://primer.style/doctocat).

This theme just gives it a little more npm flavor.

```javascript
// gatsby-config.js

module.exports = {
  siteMetadata: {
    ...
  },
  plugins: [
    ...
    {
      resolve: './theme',
      options: {
        icon: './src/images/npm-favicon.png',
        showContributors: false,
        repo: {
          url: 'https://github.com/npm/documentation',
          defaultBranch: 'main'
        }
      },
    }
  ],
}

```

## Theme Options

| Option           | Required | Default | Type    | Description                                             |
| ---------------- | -------- | ------- | ------- | ------------------------------------------------------- |
| icon             | yes      | n/a     | string  | The favicon to display                                  |
| showContributors | yes      | n/a     | boolean | Determines if the repository contributors are displayed |
| repo             | yes      | n/a     | object  | `url`, `defaultBranch` and `path` to repository         |
