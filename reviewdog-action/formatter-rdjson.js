/**
 * Formatter for Reviewdog <https://github.com/reviewdog/reviewdog>
 * Scheme <https://github.com/reviewdog/reviewdog/blob/master/proto/rdf/jsonschema/Diagnostic.json>
 */

function mapSeverity(type) {
  switch (type) {
    case 'error':
      return 'ERROR';
    case 'warning':
      return 'WARNING';
    default:
      return 'INFO';
  }
}

export default function formatterRdjson(results) {
  const diagnostics = results.flatMap((result) =>
    result.messages.map((message) => {
      const start = {
        line: message.line ?? 1,
        column: message.column ?? 1,
      };

      const end =
        message.endLine || message.endColumn
          ? {
            line: message.endLine ?? message.line ?? 1,
            column: message.endColumn ?? message.column ?? 1,
          }
          : undefined;

      const diagnostic = {
        message: message.message,
        location: {
          path: result.filePath,
          range: {
            start,
            ...(end ? { end } : {}),
          },
        },
        severity: mapSeverity(message.type),
        code: {
          value: message.rule,
          ...(message.meta && message.meta.url ? { url: message.meta.url } : {}),
        },
        original_output: JSON.stringify(message),
      };

      if (message.fixable) {
        diagnostic.suggestions = [
          {
            range: {
              start,
              ...(end ? { end } : {}),
            },
            text: `This issue can be fixed automatically. Run: dclint --fix "${result.filePath}"`,
          },
        ];
      }

      return diagnostic;
    }),
  );

  return JSON.stringify({
    source: {
      name: 'dclint',
      url: 'https://github.com/zavoloklom/dclint',
    },
    diagnostics,
  });
}