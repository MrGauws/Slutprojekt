const isps = document.querySelectorAll(".rotating-container .isp");
function rotateISPs() {
  let currentIndex = 0;
  let timer;
  isps[currentIndex].style.bottom = "0";
  isps.forEach((isp, index) => {
    if (index !== 0) {
      isp.style.bottom = "100%";
    }
  });
  function showNextISP() {
    isps[currentIndex].style.bottom = "100%";
    currentIndex = (currentIndex + 1) % isps.length;
    isps[currentIndex].style.transition = "none";
    isps[currentIndex].style.bottom = "-100%";
    void isps[currentIndex].offsetWidth;
    isps[currentIndex].style.transition = "bottom 0.5s ease";
    isps[currentIndex].style.bottom = "0";
  }
  timer = setInterval(showNextISP, 5e3);
  const container = document.querySelector(".rotating-container");
  container.addEventListener("mouseenter", () => clearInterval(timer));
  container.addEventListener("mouseleave", () => {
    timer = setInterval(showNextISP, 5e3);
  });
}
rotateISPs();
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".header__active-menu-item");
  function addHover(event) {
    const target = event.target.closest(".header__active-menu-item");
    if (target) {
      target.classList.add("hover");
    }
  }
  function removeHover(event) {
    const target = event.target.closest(".header__active-menu-item");
    if (target) {
      target.classList.remove("hover");
    }
  }
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseover", addHover);
    menuItem.addEventListener("mouseout", removeHover);
  });
  document.addEventListener("mouseover", function(event) {
    const target = event.target.closest(".mega-menu__content");
    if (target) {
      const menuItem = target.parentElement.querySelector(
        ".header__active-menu-item"
      );
      if (menuItem) {
        menuItem.classList.add("hover");
      }
    }
  });
  document.addEventListener("mouseout", function(event) {
    const target = event.target.closest(".mega-menu__content");
    if (target) {
      const menuItem = target.parentElement.querySelector(
        ".header__active-menu-item"
      );
      if (menuItem) {
        menuItem.classList.remove("hover");
      }
    }
  });
});
