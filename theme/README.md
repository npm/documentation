# theme

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: './theme',
      options: {
        icon: './path/to/favicon.png',
        showContributors: false,
        repo: {
          url: 'https://github.com/org/repo',
          defaultBranch: 'main',
        },
      },
    },
  ],
}
```

## Theme Options

| Option           | Required | Default | Type    | Description                                             |
| ---------------- | -------- | ------- | ------- | ------------------------------------------------------- |
| icon             | yes      | n/a     | string  | The favicon to display                                  |
| showContributors | yes      | n/a     | boolean | Determines if the repository contributors are displayed |
| repo             | yes      | n/a     | object  | `url` and `defaultBranch` to repository                 |
