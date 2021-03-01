let shell = require('shelljs');

let prefix = "src/components/"
let FilePath = process.env.npm_config_FilePath;
let FilePathArr = FilePath.split("/");

let path = prefix + FilePath;
console.log("生成的文件路径为：", path);
shell.cd(prefix + FilePathArr[0]);
shell.exec(`ng g c  ${FilePathArr[1]}  --module=main  && ng g m ${FilePathArr[1]}  --routing `);