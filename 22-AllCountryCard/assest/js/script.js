const search =document.querySelector(".search");
const btn = document.querySelector(".btn");
const cardbox = document.querySelector(".cardbox");




// fetch("https://restcountries.com/v3.1/name/turkiye")
// .then(res => res.json())
// .then(data => {
    // const country_region_tr = document.querySelector(".country_region_tr")
    // const region_name_tr = document.querySelector(".region_name_tr")
    // country_region_tr.innerHTML = "Region"  ;
    // region_name_tr.innerHTML = " " + data[0].region;

    // const countries_name_tr = document.querySelector(".countries_name_tr")
    // const country_name_tr = document.querySelector(".country_name_tr")
    // countries_name_tr.innerHTML = "Name"  ;
    // country_name_tr.innerHTML = " " + data[0].name.common;

    // const currencies_text_tr = document.querySelector(".currencies_text_tr")
    // const currencies_name_tr = document.querySelector(".currencies_name_tr")
    // currencies_text_tr.innerHTML = "Currencies"  ;
    // currencies_name_tr.innerHTML = " " + data[0].currencies.TRY.name;

    // const machine_series_name_tr = document.querySelector(".machine_series_name_tr")
    // const series_tr = document.querySelector(".series_tr")
    // machine_series_name_tr.innerHTML = "Machine series"  ;
    // series_tr.innerHTML = " " + data[0].car.signs;

    // const population_name_tr = document.querySelector(".population_name_tr")
    // const population_tr = document.querySelector(".population_tr")
    // population_name_tr.innerHTML = "Population"  ;
    // population_tr.innerHTML = " " + data[0].population;

   
    // const capital_name_tr = document.querySelector(".capital_name_tr")
    // const capital_tr = document.querySelector(".capital_tr")
    // capital_name_tr.innerHTML = "Capital"  ;
    // capital_tr.innerHTML = " " + data[0].capital[0];
   
    // const idd_tr = document.querySelector(".idd_tr")
    // const series_phone_tr = document.querySelector(".series_phone_tr")
    // idd_tr.innerHTML = "Phone"  ;
    // series_phone_tr.innerHTML = " " + data[0].idd.root+ data[0].idd.suffixes;
   
// })


btn.addEventListener('click',()=>{
    fetch("https://restcountries.com/v3.1/name/"+search.value)
    .then(res => res.json())
    .then(data => {
        const country_region_tr = document.querySelector(".country_region_tr")
        const region_name_tr = document.querySelector(".region_name_tr")
        country_region_tr.innerHTML = "Region"  ;
        region_name_tr.innerHTML = " " + data[0].region;
    
        const countries_name_tr = document.querySelector(".countries_name_tr")
        const country_name_tr = document.querySelector(".country_name_tr")
        countries_name_tr.innerHTML = "Name"  ;
        country_name_tr.innerHTML = " " + data[0].name.common;
    
        const currencies_text_tr = document.querySelector(".currencies_text_tr")
        const currencies_name_tr = document.querySelector(".currencies_name_tr")
        currencies_text_tr.innerHTML = "Currencies"  ;
        currencies_name_tr.innerHTML = " " + data[0].currencies.TRY.name;
    
        const machine_series_name_tr = document.querySelector(".machine_series_name_tr")
        const series_tr = document.querySelector(".series_tr")
        machine_series_name_tr.innerHTML = "Machine series"  ;
        series_tr.innerHTML = " " + data[0].car.signs;
    
        const population_name_tr = document.querySelector(".population_name_tr")
        const population_tr = document.querySelector(".population_tr")
        population_name_tr.innerHTML = "Population"  ;
        population_tr.innerHTML = " " + data[0].population;
    
       
        const capital_name_tr = document.querySelector(".capital_name_tr")
        const capital_tr = document.querySelector(".capital_tr")
        capital_name_tr.innerHTML = "Capital"  ;
        capital_tr.innerHTML = " " + data[0].capital[0];
       
        const idd_tr = document.querySelector(".idd_tr")
        const series_phone_tr = document.querySelector(".series_phone_tr")
        idd_tr.innerHTML = "Phone"  ;
        series_phone_tr.innerHTML = " " + data[0].idd.root+ data[0].idd.suffixes;
       

        console.log(data[0]);
    })


})


fetch("https://restcountries.com/v3.1/name/azerbaijan")
    .then(res => res.json())
    .then(data => {

        const country_region = document.querySelector(".country_region")
        const region_name = document.querySelector(".region_name")
        country_region.innerHTML = "Region"  ;
        region_name.innerHTML = " " + data[0].continents;

        const countries_name = document.querySelector(".countries_name")
        const country_name = document.querySelector(".country_name")
        countries_name.innerHTML = "Name"  ;
        country_name.innerHTML = " " + data[0].name.common;

        const currencies_text = document.querySelector(".currencies_text")
        const currencies_name = document.querySelector(".currencies_name")
        currencies_text.innerHTML = "Currencies"  ;
        currencies_name.innerHTML = " " + data[0].currencies.AZN.name;

        const machine_series_name = document.querySelector(".machine_series_name")
        const series = document.querySelector(".series")
        machine_series_name.innerHTML = "Machine series"  ;
        series.innerHTML = " " + data[0].car.signs;

        const population_name = document.querySelector(".population_name")
        const population = document.querySelector(".population")
        population_name.innerHTML = "Population"  ;
        population.innerHTML = " " + data[0].population;

       
        const capital_name = document.querySelector(".capital_name")
        const capital = document.querySelector(".capital")
        capital_name.innerHTML = "Capital"  ;
        capital.innerHTML = " " + data[0].capital[0];
       
        const idd = document.querySelector(".idd")
        const series_phone = document.querySelector(".series_phone")
        idd.innerHTML = "Phone"  ;
        series_phone.innerHTML = " " + data[0].idd.root+ data[0].idd.suffixes;
       

    })
    fetch("https://restcountries.com/v3.1/name/turkiye")
    .then(res => res.json())
    .then(data => {
        const country_region_tr = document.querySelector(".country_region_tr")
        const region_name_tr = document.querySelector(".region_name_tr")
        country_region_tr.innerHTML = "Region"  ;
        region_name_tr.innerHTML = " " + data[0].region;

        const countries_name_tr = document.querySelector(".countries_name_tr")
        const country_name_tr = document.querySelector(".country_name_tr")
        countries_name_tr.innerHTML = "Name"  ;
        country_name_tr.innerHTML = " " + data[0].name.common;

        const currencies_text_tr = document.querySelector(".currencies_text_tr")
        const currencies_name_tr = document.querySelector(".currencies_name_tr")
        currencies_text_tr.innerHTML = "Currencies"  ;
        currencies_name_tr.innerHTML = " " + data[0].currencies.TRY.name;

        const machine_series_name_tr = document.querySelector(".machine_series_name_tr")
        const series_tr = document.querySelector(".series_tr")
        machine_series_name_tr.innerHTML = "Machine series"  ;
        series_tr.innerHTML = " " + data[0].car.signs;

        const population_name_tr = document.querySelector(".population_name_tr")
        const population_tr = document.querySelector(".population_tr")
        population_name_tr.innerHTML = "Population"  ;
        population_tr.innerHTML = " " + data[0].population;

       
        const capital_name_tr = document.querySelector(".capital_name_tr")
        const capital_tr = document.querySelector(".capital_tr")
        capital_name_tr.innerHTML = "Capital"  ;
        capital_tr.innerHTML = " " + data[0].capital[0];
       
        const idd_tr = document.querySelector(".idd_tr")
        const series_phone_tr = document.querySelector(".series_phone_tr")
        idd_tr.innerHTML = "Phone"  ;
        series_phone_tr.innerHTML = " " + data[0].idd.root+ data[0].idd.suffixes;
       
    })
    fetch("https://restcountries.com/v3.1/name/deutschland")
    .then(res => res.json())
    .then(data => {

        const country_region_de = document.querySelector(".country_region_de")
        const region_name_de = document.querySelector(".region_name_de")
        country_region_de.innerHTML = "Region"  ;
        region_name_de.innerHTML = " " + data[0].region;

        const countries_name_de = document.querySelector(".countries_name_de")
        const country_name_de = document.querySelector(".country_name_de")
        countries_name_de.innerHTML = "Name"  ;
        country_name_de.innerHTML = " " + data[0].name.common;

        const currencies_text_de = document.querySelector(".currencies_text_de")
        const currencies_name_de = document.querySelector(".currencies_name_de")
        currencies_text_de.innerHTML = "Currencies"  ;
        currencies_name_de.innerHTML = " " + data[0].currencies.EUR.name;

        const machine_series_name_de = document.querySelector(".machine_series_name_de")
        const series_de = document.querySelector(".series_de")
        machine_series_name_de.innerHTML = "Machine series"  ;
        series_de.innerHTML = " " + data[0].car.signs;

        const population_name_de = document.querySelector(".population_name_de")
        const population_de = document.querySelector(".population_de")
        population_name_de.innerHTML = "Population"  ;
        population_de.innerHTML = " " + data[0].population;

       
        const capital_name_de = document.querySelector(".capital_name_de")
        const capital_de = document.querySelector(".capital_de")
        capital_name_de.innerHTML = "Capital"  ;
        capital_de.innerHTML = " " + data[0].capital[0];
       
        const idd_de = document.querySelector(".idd_de")
        const series_phone_de = document.querySelector(".series_phone_de")
        idd_de.innerHTML = "Phone"  ;
        series_phone_de.innerHTML = " " + data[0].idd.root+ data[0].idd.suffixes;
       

    })
    fetch("https://restcountries.com/v3.1/name/eesti")
    .then(res => res.json())
    .then(data => {

        const country_region_ee = document.querySelector(".country_region_ee")
        const region_name_ee = document.querySelector(".region_name_ee")
        country_region_ee.innerHTML = "Region"  ;
        region_name_ee.innerHTML = " " + data[0].region;

        const countries_name_ee = document.querySelector(".countries_name_ee")
        const country_name_ee = document.querySelector(".country_name_ee")
        countries_name_ee.innerHTML = "Name"  ;
        country_name_ee.innerHTML = " " + data[0].name.common;

        const currencies_text_ee = document.querySelector(".currencies_text_ee")
        const currencies_name_ee = document.querySelector(".currencies_name_ee")
        currencies_text_ee.innerHTML = "Currencies"  ;
        currencies_name_ee.innerHTML = " " + data[0].currencies.EUR.name;

        const machine_series_name_ee = document.querySelector(".machine_series_name_ee")
        const series_ee = document.querySelector(".series_ee")
        machine_series_name_ee.innerHTML = "Machine series"  ;
        series_ee.innerHTML = " " + data[0].car.signs;

        const population_name_ee = document.querySelector(".population_name_ee")
        const population_ee = document.querySelector(".population_ee")
        population_name_ee.innerHTML = "Population"  ;
        population_ee.innerHTML = " " + data[0].population;

       
        const capital_name_ee = document.querySelector(".capital_name_ee")
        const capital_ee = document.querySelector(".capital_ee")
        capital_name_ee.innerHTML = "Capital"  ;
        capital_ee.innerHTML = " " + data[0].capital[0];
       
        const idd_ee = document.querySelector(".idd_ee")
        const series_phone_ee = document.querySelector(".series_phone_ee")
        idd_ee.innerHTML = "Phone"  ;
        series_phone_ee.innerHTML = " " + data[0].idd.root+ data[0].idd.suffixes;
       


    })





    