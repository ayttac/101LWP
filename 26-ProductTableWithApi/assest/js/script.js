const table = document.querySelector("table");

fetch(`https://northwind.vercel.app/api/customers`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element, i) => {
            const tbody = document.createElement("tbody");
            const tr = document.createElement("tr");
            const tdNUM = document.createElement("td");
            const companyName = document.createElement("td");
            const contactName = document.createElement("td");
            const city = document.createElement("td");
            const country = document.createElement("td");
            const phone = document.createElement("td");
            const info = document.createElement("td");
            const infoBtn = document.createElement("input");
            const a = document.createElement("a");
            
            a.href = "index3.html";
            a.target = "_blank";
            tdNUM.innerHTML = i + 1;
            companyName.innerHTML = element.companyName;
            contactName.innerHTML = element.contactName;
            city.innerHTML = element.address.city;
            country.innerHTML = element.address.country;
            phone.innerHTML = element.address.phone;

            
            infoBtn.className = "button";
            infoBtn.type = "button";
            infoBtn.value = " INFO ";
            a.append(infoBtn);
            info.append(a);
            tr.append(tdNUM, companyName, contactName, city, country, phone, info);
            tbody.append(tr);
            table.appendChild(tbody);

            infoBtn.addEventListener("click", () => {
                localStorage.setItem("id", element.id);
              });
        });
    });