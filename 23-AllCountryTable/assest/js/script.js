fetch(`https://restcountries.com/v3.1/all/`)
  .then((res) => res.json())
  .then((data) => {

    const table = document.querySelector("#table");
    data.forEach((element, i) => {
      let tr = document.createElement('tr');
      let number = document.createElement('td');
      let name = document.createElement('td');
      let capital = document.createElement('td');
      let population = document.createElement('td');
      let flag = document.createElement('td');
      let img = document.createElement("img");
      const btn = document.createElement('td');
      img.setAttribute("src", element.flags.png);
      flag.append(img);



      number.innerHTML = i + 1;
      name.innerHTML = element.name.common;
      capital.innerHTML = element.capital?.[0] || '-';
      population.innerHTML = element.population;

      tr.append(number, name, capital, population, flag);
      table.appendChild(tr);
      console.log(element.capital);


      // let click_delete = false;

      // const delete_btn = document.createElement('button');
      // delete_btn.textContent = 'Delete';
      // delete_btn.style.padding = '5px';
      // delete_btn.style.margin_left = '2px';
      // delete_btn.addEventListener('click', () => {

      //   tr.remove();


      // });

      const updateTableRowNumbers = (table) => {
        const tr = table.querySelectorAll('tr');

        tr.forEach((tr, i) => {

          if (i > 0) {
            tr.firstElementChild.textContent = i;
          }
        });
      };

      const delete_btn = document.createElement('button');
      delete_btn.textContent = 'Delete';
      delete_btn.style.padding = '5px';
      delete_btn.style.margin_left = '2px';
      delete_btn.addEventListener('click', () => {
        const table = document.querySelector("#table");
        const tr = delete_btn.parentElement.parentElement;
        tr.remove();
        updateTableRowNumbers(table);
        // change.style.textContent="№";
      });



      const edit_btn = document.createElement('button');
      edit_btn.textContent = 'Edit';
      // edit_btn.style.display = 'none';
      edit_btn.style.padding = '5px';
      edit_btn.style.margin_left = '2px';
      edit_btn.addEventListener('click', () => {
        name.contentEditable = true;
        capital.contentEditable = true;
        population.contentEditable = true;
        edit_btn.style.display = 'none';
        save_btn.style.display = 'inline-block';
        delete_btn.style.display = 'none';
      });

      const save_btn = document.createElement('button');
      save_btn.textContent = 'Save';
      save_btn.style.display = 'none';
      save_btn.style.padding = '5px';
      save_btn.addEventListener('click', () => {
        name.contentEditable = false;
        capital.contentEditable = false;
        population.contentEditable = false;
        delete_btn.style.display = 'inline-block';
        edit_btn.style.display = 'inline-block';
        save_btn.style.display = 'inline-block';
      });

      btn.appendChild(delete_btn);
      btn.appendChild(edit_btn);
      btn.appendChild(save_btn);


      tr.appendChild(number);
      tr.appendChild(name);
      tr.appendChild(capital);
      tr.appendChild(population);
      tr.appendChild(flag);
      tr.appendChild(btn);
      table.appendChild(tr);
    })
  })
  .catch(error => console.error(error));