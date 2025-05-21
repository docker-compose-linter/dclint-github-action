# Run DCLint with Reviewdog 🐶

This action runs [DCLint](https://github.com/zavoloklom/docker-compose-linter) with
[Reviewdog](https://github.com/reviewdog/reviewdog) on pull requests to lint compose files.

## Inputs

### `github_token`

Optional. `${{ github.token }}` is used by default.

### `tool_name`

Optional. Tool name to use for reviewdog reporter. Useful when running multiple actions with different config.

### `reporter`

Optional. Reporter of reviewdog command [`github-pr-check`, `github-pr-review`]. The default is `github-pr-check`.

### `filter_mode`

Optional. Filtering mode for the reviewdog command [`added`, `diff_context`, `file`, `nofilter`]. Default is `added`.

### `fail_on_error`

Deprecated, use `fail_level` instead. Optional. Exit code for reviewdog when errors are found [`true`, `false`] Default
is `false`.

### `reviewdog_flags`

Optional. Additional reviewdog flags.

### `dclint_flags`

Optional. Pass dclint flags:

```yaml
with:
  dclint_flags: ./test-data/ -r --debug
```

## Example usage

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
        uses: zavoloklom/dclint-github-action/reviewdog-action@v1.0.0
        with:
          reporter: github-pr-review # Default is `github-pr-check`
          dclint_flags: ./compose/ # Default is `.`
```

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
