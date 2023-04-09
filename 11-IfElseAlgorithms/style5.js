let a=Number(prompt("katet1"))  
let b=Number(prompt("katet2"))
let c=Number(prompt("hipotenuz"))
let check=a*a+b*b==c*c;
switch(check){
    case true:
        console.log("Düzbucaqlı üçbucaqdır");
        break;
     case false:
        console.log("Düzbucaqlı üçbucaq deyil");
        break;   
}