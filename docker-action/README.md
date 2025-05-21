# DCLint Docker Action

This action runs [DCLint](https://github.com/zavoloklom/docker-compose-linter) using Docker image. Requires Docker
support (default in GitHub runners).

## Inputs

### `args`

CLI arguments to pass to DCLint. Default `["."]`.

## Example usage

```yaml
- uses: zavoloklom/dclint-github-action/docker-action@v1.0.0
  with:
    args: '["./compose", "-r", "--debug"]'
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
