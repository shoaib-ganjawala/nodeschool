require('fs').readFile(process.argv[2], function functionName(err, bufferData) {
  if(err){
    return console.log(err);
  }
  console.log(bufferData.toString().split('\n').length-1);
})
