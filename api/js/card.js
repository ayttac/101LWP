const cardBox = document.querySelector(".cardBox");
fetch("http://localhost:3000/imtahan")
.then((res)=> res.json())
.then((data)=>{
    data.forEach((item,i) => {
        if (i<8) {
                  
        const card = document.createElement("div");
        card.classList.add("card")

        const name = document.createElement("p");
        const surname = document.createElement("p");
        const age = document.createElement("p");
        const img=document.createElement("img");

        name.innerText="Name: " + item.name;
        surname.innerText="Surname: " + item.surname;
        age.innerText="Age: " + item.age;
        img.src=item.img_url;

        cardBox.append(card);
        card.append(name,surname,age,img);

    }
    });
})



// post 
const create=document.querySelector(".create");
const post =document.createElement("a");
post.innerText="create"
post.href="post.html"
post.target="_blank"
create.append(post);


// delete 
const dlt = document.querySelector(".delete");

dlt.addEventListener('click',function () {
    fetch('http://localhost:3000/imtahan/2',{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });

})

// update 
const update = document.querySelector(".update");

update.addEventListener('click',function () {
    fetch('http://localhost:3000/imtahan/5',{
        method:"PUT",
        body: JSON.stringify({
            name:"senuber",
            surname:"bxszd",
            age:"21"
        }),   
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });

})


// more 
const more=document.querySelector(".more");
const moreLoad =document.createElement("a");
moreLoad.innerText="moreLoad"
moreLoad.href="more.html"
moreLoad.target="_blank"
more.append(moreLoad);
