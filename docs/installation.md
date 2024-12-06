# Installation

## With Homebrew

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

## With a shell plugin manager

### Zsh

You can install git-commit-message-summary-length with a shell plugin manager, including those built into frameworks such as Oh-My-Zsh (OMZ) and prezto. Each has their own way of doing things. Read your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

Want to stay on this major version until you _choose_ to upgrade to the next? Use your package manager's convention for specifying the branch `v1`.

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart your shell in that terminal:

```shell
exec zsh
```

### Other shells

Users of shells **other than zsh** may be able to install git-commit-message-summary-length as a plugin. Check your plugin manager's documentation for support for installing commands.

## Manual

1. Either
    - download the archive of the release of your choice from <https://github.com/olets/git-commit-message-summary-length/releases> and expand it (ensures you have the latest official release), 

    - or clone a single branch:

        ```shell
        git clone https://github.com/olets/git-commit-message-summary-length --recurse-submodules --single-branch --branch <branch> --depth 1
        ```

        Replace `<branch>` with a branch name. Good options are `main` (for the latest stable release), `next` (for the latest release, even if it isn't stable), or `v6` (for releases in this major version).

1. Put the file `git-commit-message-summary-length` in a directory in your `PATH`.
