# DCLint GitHub Actions

[![GitHub Release](https://img.shields.io/github/v/release/docker-compose-linter/dclint-github-action?logo=github&sort=semver&style=for-the-badge)](https://github.com/docker-compose-linter/dclint-github-action/releases)

Lint Docker Compose files with [DCLint](https://github.com/zavoloklom/dclint), using GitHub Actions.

This repository provides three official GitHub Actions:

| Variant                         | Description                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------- |
| Node.js (base)                  | Runs `dclint` via `npx` (requires Node in runner)                            |
| [Docker](./docker-action)       | Runs `dclint` inside Docker container (requires Docker in runner)            |
| [Reviewdog](./reviewdog-action) | Integrates `dclint` with [reviewdog](https://github.com/reviewdog/reviewdog) |

## Node.js (npx) Action

This variant runs [`dclint`](https://github.com/zavoloklom/dclint) via `npx`. Requires Node.js 18+ (default in GitHub
runners).

### Example usage

```yaml
- uses: zavoloklom/dclint-github-action@v1.1.0
  with:
    path: ./compose/
    recursive: true
```

### Inputs

| Name           | Description                                    | Default  |
| -------------- | ---------------------------------------------- | -------- |
| `path`         | Path to file or directory                      | `.`      |
| `recursive`    | Recursively search directories                 | `false`  |
| `fix`          | Apply automatic fixes                          | `false`  |
| `dry-run`      | Simulate fixes without saving                  | `false`  |
| `formatter`    | Output formatter (e.g., `json`, `github`)      | `github` |
| `max-warnings` | Max warnings allowed before failure            | `-1`     |
| `exclude`      | Exclude files or directories (space-separated) |          |
| `disable-rule` | Skip specific rules (space-separated)          |          |
| `debug`        | Enable debug output                            | `false`  |

### Output

This action writes a summary to `$GITHUB_STEP_SUMMARY`.

## 🐳 Docker-based Action

This action runs [DCLint](https://github.com/zavoloklom/docker-compose-linter) using Docker image. Requires Docker
support (default in GitHub runners).

### Example usage

```yaml
- uses: zavoloklom/dclint-github-action/docker-action@v1.1.0
  with:
    args: '["./compose", "-r", "--debug"]'
```

### Inputs

| Name   | Description                      | Default |
| ------ | -------------------------------- | ------- |
| `args` | Arguments passed to `dclint` CLI | `["."]` |

## 🐶 Reviewdog-integrated Action

Integrates DCLint with [Reviewdog](https://github.com/reviewdog/reviewdog) to improve code review experience.

### Example usage

```yml
name: reviewdog
on: [pull_request]
jobs:
  dclint:
    name: runner / dclint
    runs-on: ubuntu-latest
    steps:
      - name: Check out code
        uses: actions/checkout@v4.2.2
      - name: dclint
        uses: zavoloklom/dclint-github-action/reviewdog-action@v1.1.0
        with:
          reporter: github-pr-review # Default is `github-pr-check`
          dclint_flags: ./compose/ # Default is `.`
```

### Inputs

| Name              | Description                                                                            | Default                       |
| ----------------- | -------------------------------------------------------------------------------------- | ----------------------------- |
| `github_token`    | GitHub token for reviewdog                                                             | `${{ secrets.GITHUB_TOKEN }}` |
| `filter_mode`     | Filtering mode for the reviewdog command [`added`, `diff_context`, `file`, `nofilter`] | `added`                       |
| `fail_on_error`   | Whether to fail on error                                                               | `false`                       |
| `tool_name`       | Name for tool display in reviewdog report                                              | `dclint`                      |
| `reporter`        | Reporter of reviewdog command [`github-pr-check`, `github-pr-review`]                  | `github-pr-check`             |
| `reviewdog_flags` | Additional flags to pass to reviewdog                                                  |                               |
| `dclint_flags`    | Additional CLI flags to pass to dclint                                                 | `.`                           |

### Output

Reviewdog posts annotations in the PR UI. Errors do **not** fail the job by default.

## Versioning

This repository itself is versioned using [`semantic-release`](https://github.com/semantic-release/semantic-release).
All changes are categorized and released based on [Conventional Commits](https://www.conventionalcommits.org/).

### Dependency Updates

- The versions of `dclint` and `reviewdog` are **checked weekly** via a scheduled GitHub Action. The currently used
  version of `dclint` is stored in the [`.VERSION_DCLINT`](./VERSION_DCLINT) file and synced across all action variants
  automatically.
- If a new version is available, a **pull request is automatically created** to update all relevant files.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

If you'd like to contribute to this project, please read through the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating
in this project, you agree to abide by its terms.

## Changelog

The changelog is automatically generated based on
[semantic-release](https://github.com/semantic-release/semantic-release) and
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

See the [CHANGELOG.md](./CHANGELOG.md) file for detailed lists of changes for each version.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Contacts and Support

If you find this repository helpful, kindly consider showing your appreciation by giving it a star ⭐.

If you have any questions or suggestions, feel free to reach out:

- **Email**: [s.kupletsky@gmail.com](mailto:s.kupletsky@gmail.com)
- **Х/Twitter**: [zavoloklom](https://x.com/zavoloklom)
- **Instagram**: [zavoloklom](https://www.instagram.com/zavoloklom/)
- **GitHub**: [zavoloklom](https://github.com/zavoloklom)

Also, you can support this project with a donation:

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=ZKLT8EJ4KWA6L)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/zavoloklom)
