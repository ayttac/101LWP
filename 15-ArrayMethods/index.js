// arr=[lankaran,baki,masalli,lerik,astara]

// 1) Arrayin bütün elementlərini 3 xarakterə endirən funksiya yazın

// let arr = ["lankaran", "baki", "masalli", "lerik", "astara",];

// function reduceChars(arr) {
//   arr.forEach(function(word, index, array) {
//     if( (word.length > 3)){
//         array[index] =word.substring(0, 3) ;
//      }else{
//         array[index] = word;
//      } 
//   });
// }

// reduceChars(arr);
// console.log(arr); 



// 2) Kiçik L hərfi ilə başlayan elementləri silən funksiya yazın
let arr = ["lankaran", "baki", "masalli", "lerik", "astara",];
function choose(element) {
    return element[0] !== "l";
  }
  function chooseElements(array) {
    return array.filter(choose);
  }
  
  console.log(chooseElements(arr)); 



// 3)Verilmiş arrayin 2-ci elementinə [mandalin,limon] arrayini push eden funksiya yazin. Verilmiş arrayin elementini saxlamaq şərti ilə.
// let arr = ["lankaran", "baki", "masalli", "lerik", "astara",];
// function addWord(elem) {
//     addWord.splice(1,0,'mandalin','limon')
//     return addWord
// }
// arr.splice(1,0,'mandalin','limon')
// console.log(arr);