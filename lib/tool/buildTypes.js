const path = require("path");
// https://www.npmjs.com/package/ts-morph
const { Project } = require("ts-morph");

const outDir = "lib/es";

const main = async () => {
  // 这部分内容具体可以查阅 ts-morph 的文档
  // 这里仅需要知道这是用来处理 ts 文件并生成类型声明文件即可
  const project = new Project({
    tsConfigFilePath: path.resolve(__dirname, "tsconfig.json"),
  });

  const diagnostics = project.getPreEmitDiagnostics();

  // 输出解析过程中的错误信息
  console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));

  // 将解析完的文件写到打包路径
  project.emit();

  // 将解析完的文件写到内存中，便于读取文件路径
  const result = project.emitToMemory();

  // 将文件路径打印到控制台
  console.log(
    result._files.map((file) =>
      file.filePath.slice(file.filePath.indexOf(outDir))
    )
  );
  console.info(
    `\nSuccess emit declaration file!\n
    The project has generate ${result._files.length} typescript declaration files\n`
  );
};

main();
