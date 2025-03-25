export function main(someName: string): string {
    let someText = "";
    let someTextLen = 0;
    if (someName.replaceAll(/[^\u0000-\u00FF]/g, "aa").length > 10) {
        for (const char of someName.split("")) {
            someTextLen += char.replaceAll(/[^\u0000-\u00FF]/g, "aa") == "aa"
                ? 2
                : 1;

            if (someTextLen <= 7) {
                someText += char;
            }
        }
        return someText += "...";
    }
    return someName;
}
