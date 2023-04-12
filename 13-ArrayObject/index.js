// array = [23,1,5,3,12,4,9,81,7,11,22,31,6];

// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin.


let array=[23,1,5,3,12,4,9,81,7,11,22,31,6];
let min_tek = 81; 
let max_cut = 0;


for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0 && (array[i] < min_tek)) {
    min_tek = array[i];
    //  console.log(min_tek);
  }
}


for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0 && (array[i] > max_cut)) {
    max_cut = array[i];
    // console.log(max_cut);
  }
}

for (let i = 0; i < array.length; i++) {
     if(array[i]==min_tek){
        array[i]=max_cut;
     }
     else if(array[i]==max_cut){
        array[i]=min_tek;
     }
    
}
console.log(array);
