# npm Documentation
# Style Guide

From the GitHub Manual of Style, which this style guide inherits from:

> Words are an important part of how software works. Just as we have a style guide for our code, we have a style guide for our tone and our voice. Even though there may be dozens of people creating a product, it should still sound like we speak in one consistent voice.
>
> In other words, the way we write is just as important as the way we design. Consider these things when writing copy.

Where possible, [automated tests](../test/prose) enforce style rules.

## Content principles
All written content should follow these principles:

* **Approachability:** Don't assume the reader has prior knowledge
* **Brevity:** Keep it simple, link to outside content for deeper dives
* **Curation:** Amplify community best practices vs. any individual's point of view

Content should maintain a light-hearted, but wise (think classy, not overly excited) tone. Open source is fun! Readers should feel inspired, not discouraged, by the tone of your writing, and they should trust you to help them get started.

## Mentions

When referring to people that use GitHub, use @mentions of their username instead of their full name.

- :smile: As @jessfraz put it...
- :cry: As [Jess Frazelle](https://github.com/jessfraz) put it...

When referring to a project on GitHub, link to the repository so others can dive deeper, if they choose.

- :smile: @maxogden took a similar approach to [Dat](https://github.com/datproject/dat)...
- :cry: @maxogden took a similar approach to Dat...

## Capitalization

"Guides" is capitalized when referring to the "Open Source Guides", but not when saying "the guide" or "this guide".

- :smile: Welcome to Open Source Guides!
- :smile: The guide is meant to...
- :cry: The goal of this Guide is to...

## More guidance

Understand our [content model](content-model.md) and [audience](personas.md)
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
