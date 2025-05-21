# DCLint GitHub Action

Lint your Docker Compose files with [DCLint](https://github.com/zavoloklom/dclint), using GitHub Actions.

## Inputs

### `path`

**Required** Path(s) to file(s) or directory(ies) to lint (space-separated). Default `.`.

### `recursive`

Recursively search directories. Default `false`.

### `fix`

Apply automatic fixes. Default `false`.

### `dry-run`

Simulate fixes without saving. Default `false`.

### `formatter`

Output formatter (e.g. stylish, json, github). Default `github`.

### `max-warnings`

Maximum number of warnings allowed before failure. Default `-1`.

### `exclude`

Excludes specific files or directories from being checked (space-separated).

### `disable-rule`

Skips the execution of specific rules (space-separated).

### `debug`

Outputs debugging information to the console. Default `false`.

## Output

This action writes a summary to `$GITHUB_STEP_SUMMARY`.

## Example usage

```yaml
- uses: zavoloklom/dclint-github-action/node-action@v1.0.0
  with:
    path: ./compose/
```

> Requires Node.js 18+ (default in GitHub runners)

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more information.

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
