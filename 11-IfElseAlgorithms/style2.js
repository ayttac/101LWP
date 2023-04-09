let a=Number(prompt("a-nı daxil edin"));
let b=Number(prompt("b-ni daxil edin"));
let c=Number(prompt("c-ni daxil edin"));
if(a>b && a>c){
    if(b>c){
        console.log("Big number: "+(a*100+b*10+c*1));
        console.log("Little number: "+(c*100+b*10+a));
    }else{
        console.log("Big number: "+(a*100+c*10+b));
        console.log("Little number: "+(b*100+c*10+a));
    }
}else if(b>a && b>c){
    if(a>c){
        console.log("Big number: "+(b*100+a*10+c));
        console.log("Little number: "+(c*100+a*10+b));    
    }else{
        console.log("Big number: "+(b*100+c*10+a));
        console.log("Little number: "+(a*100+c*10+b));
    }
}else if(c>a && c>b){
    if(a>b){
        console.log("Big number: "+(c*100+a*10+b));
        console.log("Little number: "+(b*100+a*10+c));
    }else{
        console.log("Big number: "+(c*100+b*10+a));
        console.log("Little number: "+(a*100+b*10+c));
    }
}
