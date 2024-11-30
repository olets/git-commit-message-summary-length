# Examples

1. Check the length of the checked-out commit:

    ```shell
    git commit-message-summary-length
    ```

1. Print `ok` if `origin/main`'s second ancestor commit's message is 47 characters long or shorter:

    ```shell
    git commit-message-summary-length --error-after=47 --log-level=0 origin/main~2 && echo ok
    ```

1. Configure for GitHub, which in some parts of the web UI truncates messages longer than 72 characters to 69 characters:

    ```shell
    git config --global commit-message-summary-length.warnafter 69
    git commit-message-summary-length
    ```

1. Automatically run after every commit:

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

1. Type less:

    ```shell
    git config --global alias.l commit-message-summary-length
    ```

    Or if your shell has native abbreviations (like fish) or an abbreviations plugin (like zsh's [zsh-abbr](https://zsh-abbr.olets.dev), by the creator of git-commit-message-summary-length), create an abbreviation for `git commit-message-summary-length`. (`l` is nice and short.)
