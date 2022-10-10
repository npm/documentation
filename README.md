# npm Documentation

[![Publish](https://github.com/npm/documentation/actions/workflows/publish.yml/badge.svg)](https://github.com/npm/documentation/actions/workflows/publish.yml)

This is the documentation for
[https://docs.npmjs.com/](https://docs.npmjs.com/).

[This repository](https://github.com/npm/documentation) contains the
content for our documentation site, and the GitHub Actions workflows
that generate the site itself.

## Quick start

1. `npm install` to download gatsby, our theme, and the dependencies
2. `npm run develop`: starts the test server at `http://localhost:8000`.
3. Update the content - it's Mdx, which is like markdown - in the `content`
   directory.
4. Review your content at `http://localhost:8000`.  (Gatsby watches the
   filesystem and will reload your content changes immediately.)
5. Once you're happy, commit it and open a pull request at
   https://github.com/npm/documentation.
6. A CI workflow run will publish your PR to a GitHub Preview Page.
7. Once the content is reviewed, merge the pull request.  That will
   [deploy the site](https://github.com/npm/documentation/actions/workflows/publish.yml).

Do you want to know more? Check out our [contributing guide](CONTRIBUTING.md).

## Theme

The gatsby theme used here is located in the [`theme/`](./theme) directory. It is a variation of
[doctocat](https://github.com/primer/doctocat) with some theme changes
for npm's design language and additional components to support multiple
versions of the CLI documentation.

## License

The npm product documentation in the content, and static folders are licensed under a [CC-BY 4.0 license](LICENSE).

All other code in this repository is licensed under a [MIT license](LICENSE-CODE).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
