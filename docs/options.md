# Options

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
