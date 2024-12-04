---
titleTemplate: :title # see also VitePress config
outline: false
---

# git-commit-message-summary-length

![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-commit-message-summary-length) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-commit-message-summary-length/latest)

![git-commit-message-summary-length splash card](/git-commit-message-summary-length-card.jpg)

**git-commit-message-summary-length**: Check the length of a commit message's first line.

## Usage

```shell
git commit-message-summary-length [--error-after=<length>] [--log-level=<log level>] [--warn-after=<length>] [<revision>]
```

Succeeds if the commit message summary's length is less than or equal to the "error after" length (default 72).

Fails if the commit message summary's length is greater than the "error after" length (default 72).

`revision` (default `HEAD`) is any [revision](https://git-scm.com/docs/gitrevisions) parameter accepted by `git log -1`.

- If the log level is `0`, the command has no output.

- If the log level is `1`, the integer length of the commit message is logged.

- If the log level is `2`, the length of the commit message is logged in a sentence, colored yellow if the commit message summary's length is between "warn after" (default 50) and "error after" (default 72) characters long, or colored red if the message is more than "error after" (default 72) characters long.

- If the log level is `3` (default)

    - as with log level `2`, the length of the commit message is logged in a sentence, colored yellow if the commit message summary's length is between "warn after" (default 50) and "error after" (default 72) characters long, or colored red if the message is more than "error after" (default 72) characters long

    - and the commit message is logged, with characters after "warn after" and up to "error after" highlighted in yellow, and characters after "warn after" highlighted in red.
