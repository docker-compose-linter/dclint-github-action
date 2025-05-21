export default {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '# Changelog' +
          '\n\n> This file was generated automatically using [@semantic-release](https://github.com/semantic-release/semantic-release).',
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npm run changelog:fix || true',
      },
    ],
    // Update version in README
    [
      '@semantic-release/exec',
      {
        prepareCmd: [
          'sed -i "s|zavoloklom/dclint-github-action@v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+|zavoloklom/dclint-github-action@v${nextRelease.version}|g" README.md',
          'sed -i "s|zavoloklom/dclint-github-action/docker-action@v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+|zavoloklom/dclint-github-action/docker-action@v${nextRelease.version}|g" README.md',
          'sed -i "s|zavoloklom/dclint-github-action/reviewdog-action@v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+|zavoloklom/dclint-github-action/reviewdog-action@v${nextRelease.version}|g" README.md',
        ].join(' && ')
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'CHANGELOG.md',
          'README.md',
        ],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'release: ${nextRelease.version} [skip ci]',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'README.md',
            label: 'Documentation',
          },
          {
            path: 'CHANGELOG.md',
            label: 'Changelog',
          },
        ],
      },
    ],
  ],
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      {
        type: 'feat',
        section: 'Features',
      },
      {
        type: 'fix',
        section: 'Bug Fixes',
      },
      {
        type: 'refactor',
        section: 'Code Refactoring',
      },
      {
        type: 'perf',
        section: 'Performance Improvements',
      },
      {
        type: 'test',
        section: 'Tests',
      },
      {
        type: 'deps',
        section: 'Dependencies',
      },
      {
        type: 'docs',
        section: 'Documentation',
      },
      {
        type: 'ci',
        section: 'CI/CD',
      },
      {
        type: 'chore',
        section: 'Others',
      },
      {
        type: 'revert',
        section: 'Reverts',
      },
    ],
    releaseRules: [
      {
        type: 'feat',
        release: 'minor',
      },
      {
        type: 'fix',
        release: 'patch',
      },
      {
        type: 'refactor',
        release: false,
      },
      {
        type: 'perf',
        release: 'patch',
      },
      {
        type: 'test',
        release: false,
      },
      {
        type: 'deps',
        scope: 'dev',
        release: false,
      },
      {
        type: 'deps',
        release: 'patch',
      },
      {
        type: 'docs',
        release: false,
      },
      {
        type: 'ci',
        release: false,
      },
      {
        type: 'chore',
        release: false,
      },
      {
        type: 'revert',
        release: 'patch',
      },
      {
        type: 'release',
        release: false,
      },
    ],
    userUrlFormat: 'https://github.com/{{user}}',
  },
};
