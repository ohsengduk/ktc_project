// 헤더부분
const home = document.querySelector("#home");

home.addEventListener("click", () => {
  home.classList.toggle("active");
});

const search = document.querySelector(".search");
search.addEventListener("click", () => {
  search.classList.add("active");
});


// 상단 효과
/*======================================================================*/ 
let next = document.querySelector('.next'),
    prev = document.querySelector('.prev');
// console.log(next, prev);

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.h_slide').appendChild(items[0]);
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.h_slide').prepend(items[items.length - 1]);
})

/*======================================================================*/ 

// 
const swiper = new Swiper (".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".next",
      prevEl: ".prev",
  },

  breakpoints: {
      0: { slidesPerView: 1, },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
  },
})