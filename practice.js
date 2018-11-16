var things = ['chair', 'house', 'table']
for(var i = 0; i < things.length; i++){
  console.log(things[i]);
}

things.forEach(function(item, index, wholeArray) {
  console.log(item, index, wholeArray);
});
// this block is running within the each


// function forEach(array, actFunction) {
//   for (var i = 0; i < array.length, i++) {
//     var currentItem = array[i];
//     actFunction(currentItem);
//   }
// }
//
//
// // functions are first class citizens and functions are object

console.log('starting');

// console.time('calling setTimeout')

setTimeout(function(){
  console.log('Timeout Complete!');
  console.timeEnd('calling setTimeout');
}, 2000);

function timeMe(funcToTime) {
  console.time(functToTime.name);
  funcToTime();
  console.timeEnd(funcToTime.name);
}




//












































// cannot break within a function but can break within a loop
// return will end the function
