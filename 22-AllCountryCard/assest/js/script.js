let searchBtn=document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

function clearCards() {
  const countryCards = document.querySelector(".country_cards");
  countryCards.innerHTML = " ";
}

searchBtn.addEventListener("click",() =>{
  clearCards();
  let countryName = countryInp.value;
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then(res => res.json())
  .then(data => {
    data.forEach(country => {
        const name = country.name.common;
        const flag = country.flags.svg;
        const population = country.population;
        const capital = country.capital ? country.capital[0] : "";
        const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "";
        const phoneCode = "" + data[0].idd.root+ data[0].idd.suffixes;
  
        const card = document.createElement("div");
        card.classList.add("card1");
        const title = `
          <div class="title">
            <div class="country">Country</div>
            <div class="flag">
              <img src="${flag}" alt="${name} flag">
            </div>
            <div class="name_bar">${name}</div>
          </div>
        `;
        const about = `
          <div class="about">
            <div class="box">
              <div class="box1">
                <div class="country_region">Capital</div>
              </div>
              <div class="box2">
                <div class="region_name">${capital}</div>
              </div>
            </div>
            <div class="box">
              <div class="box1">
                <div class="countries_name">Currencies</div>
              </div>
              <div class="box2">
                <div class="country_name">${currencies}</div>
              </div>
            </div>
            <div class="box">
              <div class="box1">
                <div class="currencies_text">Population</div>
              </div>
              <div class="box2">
                <div class="currencies_name">${population}</div>
              </div>
            </div>
            <div class="box">
              <div class="box1">
                <div class="machine_series_name">Phone Code</div>
              </div>
              <div class="box2">
                <div class="series">${phoneCode}</div>
              </div>
            </div>
          </div>
        `;
  
        card.innerHTML = title + about;
        document.querySelector(".country_cards").appendChild(card);
    });
  });
});

let showAllBtn = document.getElementById("show-all-btn");
function showAllCards() {
  clearCards();
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
      data.forEach(country => {
        const name = country.name.common;
        const flag = country.flags.svg;
        const population = country.population;
        const capital = country.capital ? country.capital[0] : "";
        const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "";
        const phoneCode = "" + country.idd.root+ country.idd.suffixes;
       
        const card = document.createElement("div");
        card.classList.add("card1");
        const title = `
          <div class="title">
            <div class="country">Country</div>
            <div class="flag">
              <img src="${flag}" alt="${name} flag">
            </div>
            <div class="name_bar">${name}</div>
          </div>
        `;
        const about = `
          <div class="about">
            <div class="box">
              <div class="box1">
                <div class="country_region">Capital</div>
              </div>
              <div class="box2">
                <div class="region_name">${capital}</div>
              </div>
            </div>
            <div class="box">
              <div class="box1">
                <div class="countries_name">Currencies</div>
              </div>
              <div class="box2">
                <div class="country_name">${currencies}</div>
              </div>
            </div>
            <div class="box">
              <div class="box1">
                <div class="currencies_text">Population</div>
              </div>
              <div class="box2">
                <div class="currencies_name">${population}</div>
              </div>
            </div>
            <div class="box">
              <div class="box1">
                <div class="machine_series_name">Phone Code</div>
              </div>
              <div class="box2">
                <div class="series">${phoneCode}</div>
              </div>
            </div>
          </div>
        `;

        card.innerHTML = title + about;
        document.querySelector(".country_cards").appendChild(card);
      });
    });
}
showAllBtn.addEventListener("click", showAllCards);

let showNeighborsBtn = document.getElementById("show-neighbors-btn");

showNeighborsBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  showNeighbors(countryName);
  if (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        let neighbors = data[0].borders;
        console.log(neighbors);
        if (neighbors && neighbors.length > 0) {
          console.log(`Neighbors of ${countryName}:`);
          neighbors.forEach(neighbor => {
            console.log(neighbor);
          });
        } else {
          console.log(`${countryName} has no neighbors.`);
        }
      })
      .catch(err => console.error(err));
  }
});

