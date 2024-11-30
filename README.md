# git-commit-message-summary-length ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/git-commit-message-summary-length) ![GitHub commits since latest release](https://img.shields.io/github/commits-since/olets/git-commit-message-summary-length/latest)

**git-commit-message-summary-length**: Check the length of a commit message's first line.

## Usage

```shell
git commit-message-summary-length [--error-after=<length>] [--log-level=<log level>] [--warn-after=<length>] [<revision>]
```

Succeeds if the commit message summary's length is less than or equal to the "error after" length (default 72).

Fails if the commit message summary's length is greater than the "error after" length (default 72).

`revision` (default `HEAD`) is any [revision](https://git-scm.com/docs/gitrevisions) parameter accepted by `git log -1`.

If the log level (default `3`)

- is `0`, the command has no output.

- is `1`, the integer length of the commit message is logged.

- is `2`, the length of the commit message is logged in a sentence, colored yellow if the commit message summary's length is between "warn after" (default 50) and "error after" (default 72) characters long, or colored red if the message is more than "error after" (default 72) characters long.

- is `3`,
    - as with log level `2`, the length of the commit message is logged in a sentence, colored yellow if the commit message summary's length is between "warn after" (default 50) and "error after" (default 72) characters long, or colored red if the message is more than "error after" (default 72) characters long,
    - and the commit message is logged, with characters after "warn after" and up to "error after" highlighted in yellow, and characters after "warn after" highlighted in red.

## Options

git-commit-message-summary-length is configured with git-config.

To set an option, run

```shell
git config [--global] commit-message-summary-length.<key> <value>
```

To get an option, run

```shell
git config [--global] commit-message-summary-length.<key>
```

To unset an option, run

```shell
git config unset [--global] commit-message-summary-length.<key>
```

To unset all options, run

```shell
git config remove-section [--global] commit-message-summary-length
```

Option | Default if not configured | Configures
---|---|---
`errorafter` | `50` | Maximum recommended commit message summary's length if `--error-after` is not passed.
`loglevel` | `3` | Log level if `--log-level` is not passed.
`warnafter` | `72` | Maximum accepted commit message summary's length if `--warn-after` is not passed.

## Examples

- Check the length of the checked-out commit:

    ```shell
    git commit-message-summary-length
    ```

- Print `ok` if `origin/main`'s second ancestor commit's message is 47 characters long or shorter:

    ```shell
    git commit-message-summary-length --error-after=47 --log-level=0 origin/main~2 && echo ok
    ```

- Configure for GitHub, which in some parts of the web UI truncates messages longer than 72 characters to 69 characters:

    ```shell
    git config --global commit-message-summary-length.warnafter 69
    git commit-message-summary-length
    ```

- Automatically run after every commit:

    1. Configure `git config --global init.templatedir` if you haven't already.

        ```shell
        git config --global init.templatedir

        # if no output
        git config --global init.templatedir ~/.config/.git-templates`
        ```

    2. Add a `post-commit` hook file, and add a git-commit-message-summary-length command to it.

        ```shell
        mkdir -p $(git config --global init.templatedir)/hooks
        echo "git commit-message-summary-length" >> $(git config --global init.templatedir)/hooks/post-commit
        chmod +x $(git config --global init.templatedir)/hooks/post-commit
        ```

- Type less:

    ```shell
    git config --global alias.l commit-message-summary-length
    ```

    Or if your shell has native abbreviations (like fish) or an abbreviations plugin (like zsh's [zsh-abbr](https://zsh-abbr.olets.dev), by the creator of git-commit-message-summary-length), create an abbreviation for `git commit-message-summary-length`. (`l` is nice and short.)

## Installation

### With Homebrew

> [!TIP]
> Recommended

git-commit-message-summary-length is available on Homebrew. Run

```shell
brew install olets/tap/git-commit-message-summary-length
```

and follow the post-install instructions logged to the terminal.

`brew upgrade` will upgrade you to the latest version, even if it's a major version change.

Want to stay on this major version until you _choose_ to upgrade to the next? When installing git-commit-message-summary-length with Homebrew for the first time, run

```shell
brew install olets/tap/git-commit-message-summary-length@1
```

If you've already installed `olets/tap/git-commit-message-summary-length` with Homebrew, you can switch to the v6 formula by running

```shell
brew uninstall --force git-commit-message-summary-length && brew install olets/tap/git-commit-message-summary-length@6
```

### With a shell plugin manager

#### Zsh

You can install git-commit-message-summary-length with a shell plugin manager, including those built into frameworks such as Oh-My-Zsh (OMZ) and prezto. Each has their own way of doing things. Read your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

Want to stay on this major version until you _choose_ to upgrade to the next? Use your package manager's convention for specifying the branch `v1`.

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart your shell in that terminal:

```shell
exec zsh
```

#### Other shells

Users of shells **other than zsh** may be able to install git-commit-message-summary-length as a plugin. Check your plugin manager's documentation for support for installing commands.

### Manual

1. Either
    - download the archive of the release of your choice from <https://github.com/olets/git-commit-message-summary-length/releases> and expand it (ensures you have the latest official release), 

    - or clone a single branch:

        ```shell
        git clone https://github.com/olets/git-commit-message-summary-length --recurse-submodules --single-branch --branch <branch> --depth 1
        ```

        Replace `<branch>` with a branch name. Good options are `main` (for the latest stable release), `next` (for the latest release, even if it isn't stable), or `v6` (for releases in this major version).

1. Put the file `git-commit-message-summary-length` in a directory in your `PATH`.

## Changelog

See the [CHANGELOG](CHANGELOG.md) file.

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/git-commit-message-summary-length/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

<a href="https://www.github.com/olets/git-commit-message-summary-length">git-commit-message-summary-length</a> by <a href="https://olets.dev">Henry Bley-Vroman</a> is, with the exception of its logo as covered below, licensed under a license which is the unmodified text of <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> and the unmodified text of a <a href="https://firstdonoharm.dev/build?modules=eco,extr,media,mil,sv,usta">Hippocratic License 3</a>. It is not affiliated with Creative Commons or the Organization for Ethical Source.

Human-readable summary of (and not a substitute for) the [LICENSE](LICENSE) file:

You are free to

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- Non-commercial — You may not use the material for commercial purposes.
- Ethics - You must abide by the ethical standards specified in the Hippocratic License 3 with Ecocide, Extractive Industries, US Tariff Act, Mass Surveillance, Military Activities, and Media modules.
- Preserve terms — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

## Related

I've created other command line tools, including other Git tools. Check them out at <https://olets.dev/software/>.
