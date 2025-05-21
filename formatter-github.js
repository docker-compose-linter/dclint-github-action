export default function formatterGithub(results) {
    return results
        .flatMap((result) =>
            result.messages.map((message) => {
                const file = result.filePath;
                const line = message.line ?? 1;
                const col = message.column ?? 1;
                const text = `${message.rule}: ${message.message}`;

                return `::${message.type} file=${file},line=${line},col=${col}::${text}`;
            })
        )
        .join('\n');
}