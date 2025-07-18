#!/bin/sh

cd "${GITHUB_WORKSPACE}/${INPUT_WORKDIR}" || exit 1

TEMP_PATH="$(mktemp -d)"
PATH="${TEMP_PATH}:$PATH"
export REVIEWDOG_GITHUB_API_TOKEN="${INPUT_GITHUB_TOKEN}"

echo "::group::🐶 Installing reviewdog ... https://github.com/reviewdog/reviewdog"
curl -sfL https://raw.githubusercontent.com/reviewdog/reviewdog/fd59714416d6d9a1c0692d872e38e7f8448df4fc/install.sh | sh -s -- -b "${TEMP_PATH}" "${REVIEWDOG_VERSION}" 2>&1
echo "::endgroup::"

echo "::group:: Installing DCLint ..."
set -e
npm install "dclint@${DCLINT_VERSION}"
set +e
echo "dclint version:$(npx --no-install -c 'dclint --version')"
echo "::endgroup::"

echo "::group:: Running dclint with reviewdog 🐶 ..."
npx --no-install -c "dclint ${INPUT_DCLINT_FLAGS:-'.'} -f=rdjson" \
  | reviewdog -f=rdjson \
      -name="${INPUT_TOOL_NAME}" \
      -reporter="${INPUT_REPORTER:-github-pr-review}" \
      -filter-mode="${INPUT_FILTER_MODE}" \
      -fail-level="${INPUT_FAIL_LEVEL}" \
      -level="${INPUT_LEVEL}" \
      "${INPUT_REVIEWDOG_FLAGS}"

reviewdog_rc=$?
echo "::endgroup::"
exit $reviewdog_rc