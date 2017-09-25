const fs = require('fs');
const path = require('path');

module.exports =  function (dirName, fileExtention, cb) {
  fs.readdir(dirName, function (err, list) {
    if(err) return cb(err);

    list = list.filter(function(file) {
      return path.extname(file) === '.' + fileExtention;
    });
    cb(null, list);
  })
}
