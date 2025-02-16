document.addEventListener("DOMContentLoaded", () => {
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
  
    if (styleSwitcherToggle) {
      styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
      });
    }
  
    // Hide style switcher on scroll
    window.addEventListener("scroll", () => {
      const styleSwitcher = document.querySelector(".style-switcher");
      if (styleSwitcher && styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
      }
    });
  });
  
  // Function to activate a style
  function setActiveStyle(color) {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }
  
  // Day/Night theme toggle
  document.addEventListener("DOMContentLoaded", () => {
    const dayNight = document.querySelector(".day-night");
    if (dayNight) {
      dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
        document.body.classList.toggle("light");
      });
  
      // Check on page load if dark mode is enabled
      if (document.body.classList.contains("light")) {
        dayNight.querySelector("i").classList.add("fa-moon");
      } else {
        dayNight.querySelector("i").classList.add("fa-sun");
      }
    }
  });
  