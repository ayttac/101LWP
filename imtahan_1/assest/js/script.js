

// Create a function to fetch data from the API and generate the cards
function fetchCountriesData() {
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => {
        // Select the card_box element
       const cardBox = document.querySelector('.card_box');
  
        // Iterate over the first three countries in the data array
        for (var i = 0; i < 3; i++) {
         const country = data[i];
  
          // Create a card element
         const card = document.createElement('div');
          card.className = 'card';
  
          // Create a card_img element
         const cardImg = document.createElement('div');
          cardImg.className = 'card_img';
  
          // Create an img element for the country flag
         const flagImg = document.createElement('img');
          flagImg.src = country.flags.svg;
  
          // Append the flag image to the card_img element
          cardImg.appendChild(flagImg);
  
          // Create a card_text element
         const cardText = document.createElement('div');
          cardText.className = 'card_text';
  
          // Create an h4 element for the country name
         const countryName = document.createElement('h4');
          countryName.textContent = country.name.common + ",";
  
          // Create a p element for the population
         const population = document.createElement('p');
          population.textContent = country.population;
  
          // Append the country name and population to the card_text element
          cardText.appendChild(countryName);
          cardText.appendChild(population);
  
          // Append the card_img and card_text to the card element
          card.appendChild(cardImg);
          card.appendChild(cardText);
  
          // Append the card to the card_box element
          cardBox.appendChild(card);
        }
      })
      .catch(function(error) {
        console.log('An error occurred:', error);
      });
  }
  
  // Call the fetchCountriesData function to generate the cards
  fetchCountriesData();


  document.getElementById("number").addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
      const flagImg = card.querySelector(".card_img");
      const countryName = card.querySelector(".card_text > h4");
      const population = card.querySelector(".card_text > p");
  
      flagImg.style.display = "none";
      countryName.style.display = "none";
      population.style.display = "block";
    });
  });

  document.getElementById("name").addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
      const flagImg = card.querySelector(".card_img");
      const countryName = card.querySelector(".card_text > h4");
      const population = card.querySelector(".card_text > p");
  
      flagImg.style.display = "none";
      countryName.style.display = "block";
      population.style.display = "none";
    });
  });
  
  document.getElementById("flag").addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
      const flagImg = card.querySelector(".card_img");
      const countryName = card.querySelector(".card_text > h4");
      const population = card.querySelector(".card_text > p");
  
      flagImg.style.display = "block";
      countryName.style.display = "none";
      population.style.display = "none";
    });
  });
  

  document.getElementById("showAll").onclick = function () {
    const cardBoxes = document.querySelectorAll(".card_box");
    cardBoxes.forEach(function (cardBox) {
      cardBox.style.display = "block";
    });
  };
  