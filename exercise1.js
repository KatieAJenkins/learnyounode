// console.log("HELLO WORLD");
// console.log(process.argv[2]);

var array = process.argv;
console.log(array);
function sum(array){
  var sum = 0;
  for(var i = array[3]; i < array.length; i++){
    console.log(array[i]);
    sum += Number(array[i]);
    console.log(sum);
  }
}

sum(array);
