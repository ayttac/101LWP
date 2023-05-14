const submit = document.querySelector(".submitBtn");
const companyName = document.getElementById("companyName");
const contactName = document.getElementById("contactName");
const city = document.getElementById("city");
const country = document.getElementById("country");
const phone = document.getElementById("phone");
submit.addEventListener("click", (e) => {
  if (
    companyName.value === "" ||
    contactName.value === "" ||
    city.value === "" ||
    country.value === "" ||
    phone.value === ""
  ) {
    console.log("Boşluqları doldurun");
    return;
  }
  e.preventDefault();
});