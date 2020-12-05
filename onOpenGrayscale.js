function onOpen() {
  onOpenGrayscale();
}

function grayscale(sheet) {
  let numRows = sheet.getMaxRows();
  let numColumns = sheet.getMaxColumns();
  let range = sheet.getRange(1, 1, numRows, numColumns);
  let rules = sheet.getConditionalFormatRules();
  if (rules.length === 0) {
    for (let number = 0; number < 256; number++) {
      let color = SpreadsheetApp.newColor().setRgbColor(`rgb(${number}, ${number}, ${number})`).build();
      let rule = SpreadsheetApp.newConditionalFormatRule()
        .setRanges([range])
        .whenNumberEqualTo(number)
        .setBackgroundObject(color)
        .setFontColorObject(color)
        .build();
      rules.push(rule);
    }
    sheet.setConditionalFormatRules(rules);
  }
}

function onOpenGrayscale() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let grayscaleSheet = ss.getSheetByName('grayscale');
  let numRows = grayscaleSheet.getLastRow();
  let names = grayscaleSheet.getRange(1, 1, numRows).getValues().flat().filter((value) => value !== '');
  for (let name of names) {
    let sheet = ss.getSheetByName(name);
    if (sheet !== null) {
      Logger.log(name);
      grayscale(sheet);
    }
  }
}
