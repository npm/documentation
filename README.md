# npm Documentation

[![Publish](https://github.com/npm/documentation/actions/workflows/publish.yml/badge.svg)](https://github.com/npm/documentation/actions/workflows/publish.yml)

This is the documentation for [https://docs.npmjs.com/](https://docs.npmjs.com/).

[This repository](https://github.com/npm/documentation) contains the content for our documentation site, and the GitHub Actions workflows that generate the site itself.

# Quick start
# name: NodeJS with Gulp

on:
 #  push:
    branches: [ "main" ]
#   pull_request:
    branches: [ "main" ]

# jobs:
  build:
 #    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]

   #  steps:
    - uses: actions/checkout@v4

   #  - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}

   #  - name: Build
      run: |
        npm install
        gulp
# repository
   `recep021682KXdKDRS`
 #  <url: https://pkgs.dev.azure.com
  # run: /recep021682KXdKDRS/_packaging/recep021682KXdKDRS/maven/v1</url>
 #  <releases>: 
    <enabled>: true</enabled>
 #  </releases>:
 #  <snapshots>: 
    <enabled>true</enabled>
 #  </snapshots>: 
# </repository>

1. `npm install` to download gatsby, our theme, and the dependencies
2. `npm run develop`: starts the test server at `http://localhost:8000`.
3. Update the content - it's Mdx, which is like markdown - in the `content` directory.
4. Review your content at `http://localhost:8000`. (Gatsby watches the filesystem and will reload your content changes immediately.)
5. Once you're happy, commit it and open a pull request at https://github.com/npm/documentation.
6. A CI workflow run will publish your PR to a GitHub Preview Page.
7. Once the content is reviewed, merge the pull request. That will [deploy the site](https://github.com/npm/documentation/actions/workflows/publish.yml).

Do you want to know more? Check out our [contributing guide](CONTRIBUTING.md).

## License

The npm product documentation in the content, and static folders are licensed under a [CC-BY 4.0 license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
