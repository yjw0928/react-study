const qrImage = require("qr-image");
const Excel = require("exceljs");
const path = require("path")
const saveAs = require('file-saver')

const COMMON_FOLDER_PATH = path.join(__dirname, '/demo.xlsx');
console.log(COMMON_FOLDER_PATH)

const readeFile = async () => {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(COMMON_FOLDER_PATH);
  const ws = workbook.worksheets[0]

  for (
    let cIndex = 0, cIndexEnd = ws.columns.length;
    cIndex < cIndexEnd;
    cIndex++
  ) {
    if (cIndex >= 100) {
      break;
    }

    const cloumn = ws.columns[cIndex];
    const cellList = [];
    cloumn.eachCell((cell, rIndex) => {
      cellList.push([cell, rIndex]);
    });
    for (let c = 0, cEnd = cellList.length; c < cEnd; c++) {
      const [cell] = cellList[c];
      // 是合并的单元格，且不是主单元格
      if (cell.isMerged && cell.master && cell.address !== cell.master.address)
        continue;

      // const row = workbook.worksheets[0].getRow(rIndex);
      if (!cell || !cell.value) continue;
      const cellText = cell.text.trim();
      // 没有值的直接过
      if (!cellText) continue;
      if (cell.value.indexOf('qr') !== -1) {
        const qrPng = qrImage.imageSync(cell.value, { type: 'png', margin: 1 });
        const img = qrPng.toString("base64");
        ws.addRow([1, 2, 3])
        const id2 = workbook.addImage({ base64: img, extension: "png" })
        ws.addImage(id2, {
          tl: { col: 1.5, row: 1.5 },
          br: { col: 3.5, row: 5.5 },
          ext: { width: 500, height: 200 }
        })
        workbook.xlsx.writeFile("test3.xlsx")
      }
    }
  }
};

readeFile()
