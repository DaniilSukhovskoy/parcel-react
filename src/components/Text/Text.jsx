export const Text = ({ text, id }) => {
    if (!text) {
        return null;
    }
    return text.map((value, index) => {
        const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text,
        } = value;
        return (
            <span
                key={id + index}
                className={
                [   bold ? "bold" : "",
                    code ? "code" : "",
                    italic ? "italic" : "",
                    strikethrough ? "strikethrough" : "",
                    underline ? "underline" : "",
                ].filter(Boolean).join(" ")}
                style={color !== "default" ? { color } : {}}
            >
                {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
            </span>
        );
    });
};