var exceljs = require('exceljs');
var workbook = new exceljs.Workbook();

workbook.xlsx.readFile("Example.xlsx")
.then(function() {
  console.log("file read")
})
.catch(function(error) {
  console.log("Error: ",error)
})
