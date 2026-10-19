# Contributing to JeuxBrasse/naheulbeuk

Code and content contributions are accepted. Please feel free to submit issues to the issues tracker or sumbit pull requests for code\content changes. Approval for such requests involves code and (if necessary) design review by the Maintainers of this repo.

## Developer Tooling

Clonin this repository and either placing it in or symlinking to you 'Data/systems/naheulbeuk' user data directory is all that is necessary to run this within Foundry VTT. However, if you want to make changes either the LESS stylesheets or the compendia, there are some developer tools which will make you life easier.

## Issues

Check that your issue isn't a duplicate (also check the closed issues, as sometimes work which has not been released closes an issue).
Issues which are assigned to a Milestone are considered prioritized. This assignment is not permanent and issues might be pushed out of milestones if the milestone is approaching a releaseable state without that work being done.

### Bugs

- Ensure that the bug is reproducible with no modules active. If the bug only happens when a module is active, report it to the module's author instead.
- Provide hosting details as they might be relevant.
- Provide clear step-by-step reproduction instructions, as well as what you expected to happen during those steps vs what actually happened.

### Feature Requests

Any feature request should be considered from the lens of "Does this belong in the core system?"

- Do the Rules as Written (RAW) support this feature? If so, provide some examples.
- Is the missing feature in the System Reference Document? If not, it might still be supportable, but it is worth mentioning in the request.
- Does this feature help a DM run a Naheulbeuk game in Foundry VTT?

## Content

All Content released with this system must come from the

If there is missing content, please open an issue detailing what is missing.

### Translations

Non-French languages are not contained within the core naheulbeuk system, but instead they are managed by specialized 

Instead of opening an PR with translation files, create one of these modules (or contribute to an existing one!).

## Code

Here are some guidelines for contributing code to this project.

To contribute code, [fork this project](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and submit a [pull request (PR)](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request) against the correct development branch.

### Style

Please attempt to follow code style present throughout the project. An ESLint profile is included to help with maintaining a consistent code style. All warnings presented by the linter should be resolved before a PR is submitted.

### Linked Issues

Before (or alongside) submitting an PR, we ask that you open a feature request issue. This will let us discuss the approach and prioritization of the proposed change.

If you want to work on an existing issue, leave a comment saying you're going to work on the issue so that other contributors know not to duplicate work. Similarly, if you see an issue is assigned to someone, that member of the team has made it known they are working on it.

When you open an PR it is recommended to [link it to an open issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). Include which issue it resolves by putting something like this in your description:

```text
Closes #32
```

### Priority of Review

Please appreciate that reviewing contributions constitutes a substantial amount of effort and our resources are limited. As a result of this, Pull Requests are reviewed with a priority that roughly follows this:

#### High Priority

- Bug Fix
- Small Features related to issues assigned to the current milestone

#### Medium Priority

- Large Features related to issues assigned to the current milestone
- Small Features which are out of scope for the current milestone

#### Not Prioritized

- Large Features which are out of scope for the current milestone

### Pull Request Review Process

PRs have a few phases:

0. **Prioritization.** If the PR relates to the current milestone, it is assigned to that milestone.
1. **Initial Review from Contributors.** This lets us spread out the review work and catch some of the more obvious things that need to be fixed before final review. Generally this talks about code style and some methodology.
2. **Final Review from the Maintainers.** PRs not tagged as 'strategic' or tagged as 'uncontroversial' can be merged with Maintainer sign-off, otherwise the PR requires sign-off from one of the Foundry VTT core developer team.

#### PR Size

Please understand that large and sprawling PRs are exceptionally difficult to review. As much as possible, break down the work for a large feature into smaller steps. Even if multiple PRs are required for a single issue, this will make it considerably easier and therefore more likely that your contributions will be reviewed and merged in a timely manner.

Reviewing a contribution is a significant investment of maintainer time, and that investment scales poorly with both the size of the change and the degree to which it fails to meet the project's conventions. We reserve the right to close a large PR without review where it contains numerous code style violations, makes little to no attempt to integrate with the conventions and design of the existing codebase, or lacks the supporting materials needed to evaluate it, such as linked issues, change rationale, or an explanation of the proposed design. If you would like feedback before committing to a large change, open an issue to discuss the approach first.

## Releases

This repository includes a GitHub Actions configuration which automates the compilation and bundling required for a release when a Tag is pushed or created with the name `release-x.x.x`.

### Prerequisites

If either of these conditions are not met on the commit that tag points at, the workflow will error out and release assets will not be created.

- The `system.json` file's `version` must match the `x.x.x` part of the tag name.
- The `system.json` file's `download` url must match the expected outcome of the release CI artifact. This should simply be changing version numbers in the url to match the release version.

```text
https://github.com/jeuxbrasse/naheulbeuk/releases/download/release-14.0.0/dnzheulbeuk-14.0.0.0.zip
                                                     └─ Tag Name ──┘     └─ V ─┘ (version)
```

### Building Locally

If the release GitHub Action is failing, the release artifact can be produced locally with `dist.mjs`. This performs the same steps as CI: it clones a fresh copy of the repo at the given tag, installs dependencies, integrates the free rules content, builds, and zips the result.

```text
npm run dist -- <tag> <free-rules>
```

- `<tag>` - the release tag to build, e.g. `release-4.1.0`. The build fails if `system.json`'s `version` and `download` fields do not match the tag.
- `<free-rules>` - path to a local checkout of the (private) free rules content.
- `--out`, `-o` - output directory for the build (default `./dist`).
- `--repo`, `-r` - repository to clone (default `git@github.com:Jeuxbrasse/naheulbeuk.git`).
- `--url` - public URL where releases are posted (default `https://github.com/JeuwBrasse/naheulbeuk`).

The finished `naheulbeuk-<tag>.zip` is written to the output directory.

### Process for Release

`master` is to be kept as the "most recently released" version of the system. All work is done on development branches matching the milestone the work is a part of. Once the work on a milestone is complete, the following steps will create a system release:

0. [ ] Verify the `NEEDS_MIGRATION_VERSION` is correct.
1. [ ] `system.json` `version` and `download` fields are updated on the development branch (e.g. `1.5.x`).
2. [ ] A tag is created at the tip of the development branch with the format `release-x.x.x`, triggering the CI workflow (which takes ~2 mins to complete).
3. [ ] Development Branch is merged to `master` after the workflow is completed.
4. [ ] The foundryvtt.com admin listing is updated with the `manifest` url pointing to the `system.json` attached to the workflow-created release.