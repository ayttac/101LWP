"use strict"
// task3
// sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// let space = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] === " "){
//         space ++;
//     }
// }
// console.log("boşluq sayı=", space);


// task4
// sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın.
let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
let comma = 0;
let point = 0;
for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === "," || sampleNews[i] === "."){
        if(sampleNews[i] === ","){
            comma ++ ;
        }
        if(sampleNews[i] === "."){
            point ++ ;
        }
      
    }
}
console.log("vergul sayı=",comma);
console.log("noqte sayi=", point);