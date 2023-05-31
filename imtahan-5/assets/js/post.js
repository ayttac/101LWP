const create=document.querySelector(".create");

create.addEventListener("click",function(){
    const name=document.querySelector(".name").value;
    const surname=document.querySelector(".surname").value;
    const age =document.querySelector(".age").value;

    let obj={
        name:name,
        surname:surname,
        age:age
    }

    fetch("http://localhost:3000/imtahan",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    } )
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });
})