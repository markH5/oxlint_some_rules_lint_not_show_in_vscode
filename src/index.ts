export function main(someName: string): string {
    // oxlint default is "warn" ,conifg set -> "no-unused-vars": "error"
    // and oxc vscode extensions can get diag is "error"
    let foo = 0;

    let someText = "";
    let someTextLen = 0;
    if (someName.replaceAll(/[^\u0000-\u00FF]/g, "aa").length > 10) {
        //                              ^^^^^^^^^^^^^^^^^^^ can diagnosis in cli, but can not get it in vscode extensions

        for (const char of someName.split("")) {
            //                                          VVVVVVVVVVVVVVVVVV also
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
