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
        editOnGitHub: true,
        showContributors: false,
        showSidebarEditLink: true,
      },
    }
  ],
}

```


## Theme Options

| Option                 | Required | Default | Type      | Description                                                                    |
| ---------------------- | -------- |---------| --------- | ------------------------------------------------------------------------------ |
| icon                   | yes      | n/a     | string    | The favicon to display                                                         |
| editOnGitHub           | yes      | n/a     | boolean   | Determines if the "Edit this page on GitHub" link is displayed on the page     |
| showContributors       | yes      | n/a     | boolean   | Determines if the repository contributors are displayed                        |
| showSidebarEditLink    | yes      | n/a     | boolean   | Determines if the "Edit this page on GitHub" link is displayed in the SideBar  |
| repo                   | yes      | n/a     | object    | `url`, `defaultBranch` and `path` to repository                                |
