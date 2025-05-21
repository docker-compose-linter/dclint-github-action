# Contribution Guidelines

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating
in this project you agree to abide by its causes.

## Contribution Process

### 1. Fork and Clone

- **Fork**: Navigate to the repository on GitHub and click the "Fork" button to create a copy of the repository in your
  own GitHub account.
- **Clone**: Clone your forked repository to your local machine.

### 2. Create a Branch

- Create a new branch to work on your changes. Use a descriptive name for the branch, such as `feature/add-smthg` or
  `fix/linting-error`:

  ```bash
  git checkout -b <branch-name>
  ```

### 3. Development

Make your changes in the newly created branch.

### 4. Verify Everything

Before submitting your changes:

- Verify that your changes have not introduced any linting errors.

  ```bash
  npm run markdownlint
  ```

### 5. Push Changes

Push your branch to your forked repository:

```bash
git push origin <branch-name>
```

### 6. Create a Pull Request

- Navigate to the original repository on GitHub and click the "Compare & Pull Request" button for your branch.
- Provide a clear and detailed description of your changes in the pull request.

### 7. Code Review

- Once your pull request is submitted, it will undergo a review process.
- Be open to feedback and make adjustments as needed. Push updates to your branch, and they will automatically appear in
  the pull request.

### 8. Merge

- After your pull request has been approved and all checks have passed, it will be merged into the main repository.

Once your contribution is merged, it will become part of the project. I appreciate your hard work and contribution to
making this tool better. Also, I encourage you to continue participating in the project and joining in discussions and
future enhancements.

## Commit Message Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org) message conventions defined by
[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional),
with some specific adjustments to suit our needs. This standardization helps automate the version management and
changelog generation.

The commit message rules are defined in the [.commitlintrc.cjs](./.commitlintrc.cjs) file, which you can refer to for
detailed guidelines.

Below are the details of the allowed commit types and their corresponding effects on versioning.

### Commit Types

| Type       | Description                                                                   | Version Impact                    |
| ---------- | ----------------------------------------------------------------------------- | --------------------------------- |
| `feat`     | Adds a new feature or updating Reviewdog and DCLint versions.                 | Minor                             |
| `fix`      | Fixes a bug.                                                                  | Patch                             |
| `refactor` | Code changes that neither fix a bug nor add a feature (including formatting). | None                              |
| `perf`     | Changes that improve performance.                                             | Patch                             |
| `test`     | Adds or modifies tests.                                                       | None                              |
| `deps`     | Updates dependencies.                                                         | Patch / None for dev-dependencies |
| `docs`     | Documentation only changes.                                                   | None                              |
| `ci`       | Changes to CI/CD configurations.                                              | None                              |
| `chore`    | Other changes that don't modify source or test files.                         | None                              |
| `revert`   | Reverts a commit.                                                             | Patch                             |
| `release`  | Release-specific metadata updates. **Reserved for CI/CD.**                    | None                              |

### Commit Linter

A `commit-msg` hook is configured to automatically check commit messages with the defined rules.

Additionally, you can manually validate all commits in your branch using the following command:

```shell
npm run commitlint
```
