let total = 0;

process.argv.forEach(function functionName(item, index) {
  if(index>1)
    total +=  +item;
});
console.log(total);
