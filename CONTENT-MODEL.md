# Content model
## Introduction
This content model explains the goals of content in the npm docs, and what to include when you're writing or updating an article. We use a model to ensure that our content consistently, clearly, and comprehensively communicates what people need to achieve their goals with npm.
Following a content model creates consistency that helps users and maintainers of the docs.

For style questions, default to https://github.com/github/docs-internal/blob/main/contributing/content-style-guide.md

## Content structure
Docs are grouped by topic.
* Top-level doc set (Example: https://docs.npmjs.com/packages-and-modules)
	* Categories (Example: https://docs.npmjs.com/packages-and-modules/introduction-to-packages-and-modules)
		* Articles (Example: https://docs.npmjs.com/about-packages-and-modules)

### Categories
Categories are organized around a feature or a discrete set of tasks. Use titles that are task-based and describe the purpose or goal of the category.

### Articles
Articles are the basic unit of content for the docs. Use titles that are clear, descriptive, and specific, with the same terminology as the product itself. All articles follow the same content order.

#### Content order
Introduce content from the broadest applicability to the most specific, following this order:

* Conceptual content
* Procedural content for enabling a feature or setting
* Procedural content on using a feature
* Procedural content on managing a feature or setting
* Procedural content on disabling a feature or setting
* Procedural content on destructive actions (e.g. deletion)
* Troubleshooting information

Articles answer, “What is it? Why do it?” and then “How does someone do it?”

#### Content types

**Conceptual**

Conceptual content helps people understand a feature or topic by providing a clear, high-level overview, explanation of how the feature or topic can help them on their journey, and context like use cases or examples. Conceptual content is clear enough for a novice audience but also includes relevant information for advanced users. People most often use conceptual content when they're learning.
If people need certain permissions to do a task described in the article, include a permissions statement describing who can do the task in the conceptual information.

How to write conceptual content
* If people need specific permissions to do what is described in the article, list those required permissions
* Describe in plain language what the feature, setting, or topic is
* Describe its purpose and why it’s useful to the reader
* Share use cases or examples
* If relevant, describe how the feature or topic works
* Highlight any details the reader needs to know to use the feature
* Include next steps for getting started with the feature (whether through further reading links or content within the article itself)

**Procedural**

Procedural content helps people complete a task from start to finish while they're using npm. Procedural content gives context on how the task fits into someone's larger journey. If a procedure has prerequisites, include them before the procedural content.

How to write procedural content
* Group multiple related procedures into a single article unless there's a reason not to
* Use ordered lists for procedural steps
* If a step is optional, indicate that first
* Tell readers the expected outcome of any procedures
* Include troubleshooting tips as frequently as possible

How to write prerequisites
* Put the prerequisites immediately before the procedure that they are relevant to. If the prerequisites are relevant to all the procedures in an article, put them after the conceptual content and before the first procedure
* You can use a list, a sentence, or a paragraph to explain prerequisites
* You can also use a separate prerequisites section when:
	* The prerequisite information is very important and should not be missed
	* There is more than one prerequisite

#### Contents of an article
* Title
* Conceptual content
* Prerequisites (if applicable)
* Procedural content
* Troubleshooting (if applicable)

## User and job stories
When planning content, you can create user and job stories to define acceptance criteria that help determine if an article is helping users accomplish their goals.

### User stories
Create user stories to better understand each audience when a feature affects more than one audience.

As a [person in a particular role], I want to [perform an action or find something out], so that I can [achieve my goal of...].

### Job stories
Job stories are narrow, granular, and useful for targeted actions or specific tasks that a single audience wants to achieve.

When [there's a particular situation], I want to [perform an action or find something out], so that I can [achieve my goal of...].

### Acceptance criteria
Acceptance criteria explain the specific ways we'll know when a user or job story is considered complete. To define acceptance criteria, identify what an article has to offer someone for them to complete their desired task and feel satisfied.

## Article template

You can use this template when starting a new article. For more information about importing shared data to an article, see the [`CONTRIBUTING`](https://github.com/npm/documentation/blob/main/CONTRIBUTING.md#shared-content) file.

```
---
title:
---
import shared form '../../../src/shared.js'

// Conceptual content: What feature is the article about?
// Prerequisites (if applicable): Who can use the feature?
// Procedural content: How do you use the feature?
// Troubleshooting (if applicable): What do you do if the feature isn't working?
```
