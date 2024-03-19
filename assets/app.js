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
const cardInner = document.querySelector(".card__inner");
cardInner.addEventListener("mouseover", function(event) {
  if (event.target.classList.contains("card__content")) {
    event.target.style.cursor = "pointer";
  }
});
cardInner.addEventListener("click", function(event) {
  if (event.target.classList.contains("card__content")) {
    window.location.href = "/";
  }
});
