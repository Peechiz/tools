// command line tool to replace a string from a file
// maybe don't use this for something exceedingly long, or when the search string is unspecific
//
// USAGE: node find-and-replace.js FILE SEARCH STR

const fs = require('fs');

var file = process.argv[2];
var old_str = process.argv[3];
var new_str = process.argv[4];

function replace(file, old, nw){
  if (!file || !old || !nw){
    console.log('Replace terminated.  Please provide FILE, SEARCH, STRING.');
  }

  fs.readFile(file, 'utf8', (err,data)=>{
    if (err) throw err;
    var result = data.replace(old_str, new_str);

    fs.writeFile(file, result, 'utf8', err => {
      if (err) throw err;
    })
  })
}

replace(file,old_str,new_str);
