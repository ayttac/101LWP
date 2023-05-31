// function fetchData() {
//     fetch('https://restcountries.com/v3.1/all')
//     .then((res)=>res.json())
//     .then(data=>{
//        const cardBox=document.querySelector('.card_box');

//        for (let i = 0; i < 4; i++) {
//         const country=data[i];

//         const card = document.createElement('div');
//         card.className='cards';

//         const cardImg = document.createElement('div');
//         cardImg.className='card_img';
//         const flag = document.createElement('img');
//         flag.src=country.flags.svg;
// // appen 
//         cardImg.appendChild(flag);
    

//         const cardTime = document.createElement('div');
//         cardTime.className='card_time';

//         const time = document.createElement('p');
//         time.innerText=country.idd.root;
// // appen 
// cardTime.appendChild(time);
//         const cardText = document.createElement('div');
//         cardText.className='card_text';

//         const official =document.createElement('p');
//         official.innerText=country.name.official;

//         cardText.appendChild(official);

//         const name = document.createElement('h6');
//         name.innerText= country.name.common;

//         const text = document.createElement('p');
//         text.innerText=country.capital;

//         cardText.appendChild(name);
//         cardText.appendChild(text);

//         card.appendChild(cardImg);
//         card.appendChild(cardText);
//         card.appendChild(cardTime);

//         cardBox.appendChild(card);

//         console.log(cardTime);
//        };
//     });
    
// };

// fetchData()

// console.log(fetchData);


function fetchData() {
        fetch('http://localhost:3000/imtahan')
        .then((res)=>res.json())
        .then(data=>{
           const cardBox=document.querySelector('.card_box');
    
           for (let i = 0; i < 4; i++) {
            const country=data[i];
    
            const card = document.createElement('div');
            card.className='cards';
    
            const cardImg = document.createElement('div');
            cardImg.className='card_img';
            const flag = document.createElement('img');
            flag.src=country.img_url;
    // appen 
            cardImg.appendChild(flag);
        
    
            const cardTime = document.createElement('div');
            cardTime.className='card_time';
    
            const time = document.createElement('p');
            time.innerText=country.age;
    // appen 
    cardTime.appendChild(time);
            const cardText = document.createElement('div');
            cardText.className='card_text';
    
            const official =document.createElement('p');
            official.innerText=country.name;
    
            cardText.appendChild(official);
    
            const name = document.createElement('h6');
            name.innerText= country.surname;
    
        //     const text = document.createElement('p');
        //     text.innerText=country.capital;
    
            cardText.appendChild(name);
        //     cardText.appendChild(text);
    
            card.appendChild(cardImg);
            card.appendChild(cardText);
            card.appendChild(cardTime);
    
            cardBox.appendChild(card);
    
            console.log(cardTime);
           };
        });
        
    };
    
    fetchData()
    
    console.log(fetchData);
    
    

//     post 
const create=document.querySelector(".create");
const post =document.createElement("a");
post.innerText="create"
post.target="_blank"
post.href="post.html"
create.append(post);


//delete

const dlt=document.querySelector(".delete");
const post =document.createElement("a");