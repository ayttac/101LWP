let a=prompt("a-nı daxil edin");
let b=prompt("b-ni daxil edin");
let c= prompt("c-ni daxil edin");
if(a>b && a>c){
    if(b>c){
        console.log("Big sum result: "+b +" and "+a);
    }else{
        console.log("Big sum result: "+c +" and "+a);

    }
}else if(b>a && b>c){
    if(a>c){
        console.log("Big sum result: "+a +" and "+b);
    }else{
        console.log("Big sum result: "+c +" and "+b);

    }
}else if(c>a&& c>b){
    if(a>b){
        console.log("Big sum result: "+a +" and "+c);
    }else{
        console.log("Big sum result: "+b +" and "+c);

    }
}