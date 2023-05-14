
const id = localStorage.getItem("id");
fetch(`https://northwind.vercel.app/api/customers/${id}`)
  .then((res) => res.json())
  .then((data) => {
    const companyName = document.querySelector("h3");
    const first = document.querySelectorAll(".first p");
    const second = document.querySelectorAll(".second p");
    companyName.innerHTML = data.companyName;
    first[0].innerHTML = `CompanyName:`;
    first[1].innerHTML = `ContactName:`;
    first[2].innerHTML = `City:`;
    first[3].innerHTML = `Country:`;
    first[4].innerHTML = `Phone: `;
    second[0].innerHTML = data.companyName;
    second[1].innerHTML = data.contactName;
    second[2].innerHTML = data.address.city;
    second[3].innerHTML = data.address.country;
    second[4].innerHTML = data.address.phone;
  });