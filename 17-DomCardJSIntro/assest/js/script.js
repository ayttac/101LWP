const container = document.querySelector(".container");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");

red.addEventListener("click",() =>{
    container.classList.add("change");
})

blue.addEventListener("click",() =>{
    container.classList.remove("change");
})


let stars = document.querySelectorAll('.fa-star');

stars.forEach(function(star, index) {
  star.addEventListener('click', function() {
    for (let i = 0; i < stars.length; i++) {
      if (i <= index) {
        stars[i].style.color = "black";
      } else {
        stars[i].style.color = "grey";
      }
    }
  });
});

let sizeSpans = document.querySelectorAll('.container__new__airstruc2__size_number span');

sizeSpans.forEach(function(sizeSpan) {
  sizeSpan.addEventListener('click', function() {
    sizeSpans.forEach(function(span) {
      span.classList.remove('selected');
      span.style.backgroundColor = 'white';
      span.style.color = 'black';
    });
    this.classList.add('selected');
    this.style.backgroundColor = 'green';
    this.style.color = 'white';
  });
});

