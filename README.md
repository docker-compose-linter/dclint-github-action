# DCLint GitHub Actions

[![GitHub Release](https://img.shields.io/github/v/release/docker-compose-linter/dclint-github-action?logo=github&sort=semver&style=for-the-badge)](https://github.com/docker-compose-linter/dclint-github-action/releases)

Lint your Docker Compose files with [DCLint](https://github.com/zavoloklom/dclint), using GitHub Actions.

This repository provides three official GitHub Actions:

| Variant                         | Description                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------- |
| [Node.js](./node-action)        | Runs `dclint` via `npx` (requires Node in runner)                            |
| [Docker](./docker-action)       | Runs `dclint` inside Docker container (requires Docker in runner)            |
| [Reviewdog](./reviewdog-action) | Integrates `dclint` with [reviewdog](https://github.com/reviewdog/reviewdog) |

## Quick Start

### Node.js (npx) Action

```yaml
- uses: zavoloklom/dclint-github-action/node-action@v1.0.0
```

[Documentation](./node-action/README.md)

### 🐳 Docker-based Action

```yaml
- uses: zavoloklom/dclint-github-action/docker-action@v1.0.0
```

[Documentation](./docker-action/README.md)

### 🐶 Reviewdog-integrated Action

Integrates DCLint with [Reviewdog](https://github.com/reviewdog/reviewdog) to improve code review experience.

```yaml
- uses: zavoloklom/dclint-github-action/reviewdog-action@v1.0.0
```

[Documentation](./reviewdog-action/README.md)

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
