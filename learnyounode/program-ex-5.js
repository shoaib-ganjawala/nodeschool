require('fs').readdir(process.argv[2] ,function functionName(err, data) {
  if(err) return console.log(err);
    data.forEach(function(file){
    if(require('path').extname(file) === '.' + process.argv[3]) {
      console.log(file);
    }
  })
})
