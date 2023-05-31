const moreCard=document.querySelector(".moreCard");
fetch("http://localhost:3000/imtahan")
.then((res)=> res.json())
.then((data)=>{
    data.forEach((item,i) => {
        if (i<data.length) {
                  
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

        moreCard.append(card);
        card.append(name,surname,age,img);

    }
    });
})
