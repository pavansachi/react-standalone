var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./input.html', 'utf8');
var options = { 
    format: 'Letter',
    // base: "file:////Users/pavansachi/workspace/docpdf/templates/2140d740-e9c5-11e9-9d71-0cc47a792c0a_id_2140d740-e9c5-11e9-9d71-0cc47a792c0a_files", 
};
 
output = process.env.OUTPUT
pdf.create(html, options).toFile(output, function(err, res) {
  if (err) return console.log(err);
});