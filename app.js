#!/usr/bin/env node
const shell = require("shelljs");
shell.exec("ifconfig", { silent: true }, (code, stdout, stderr) => {
    const match = stdout.match(/inet\s(\d{0,3}.\d{0,3}.\d{0,3}.\d{0,3})/g);
    if (!!match && match.length > 0) {
        console.log(
            "~> " +
                match
                    .filter(v => v.indexOf("127.0.0.1") == -1)
                    .map(v => v.replace("inet", "").trim())
                    .join("\n")
        );
    }
});
