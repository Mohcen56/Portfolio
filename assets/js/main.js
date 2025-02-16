document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle (for mobile menu)
  const menuButton = document.querySelector(".mobile-toggle");
  const menu = document.getElementById("menu");
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // Handle "Read More" buttons
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const description = this.parentElement;
      description.classList.toggle("expanded");

      if (description.classList.contains("expanded")) {
        this.textContent = "Show Less";
      } else {
        this.textContent = "Show More";
      }
    });
  });

  // Initialize ScrollReveal
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})
/* -- HOME -- */
sr.reveal(".home-info", {});
sr.reveal(".home-img", { delay: 100 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".work", { interval: 200 });
sr.reveal(".job", { interval: 200 });


/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.left-column',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.right-column',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

 /* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typing",{
  strings : ["Software engineer","student","web Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})
  



});




