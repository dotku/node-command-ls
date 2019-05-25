var fs = require("fs");

if (process.argv.length === 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

var path = process.argv[2];

fs.readdirSync(path, { withFileTypes: true }, function(err, items) {
  for (var i = 0; i < items.length; i++) {
    console.log(items[i].name, items[i].isDirectory());
  }
});
