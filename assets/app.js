const isps = document.querySelectorAll(".rotating-container .isp");
function rotateISPs() {
  let currentIndex = 0;
  let timer;
  isps[currentIndex].style.transition = "bottom 0.25s ease";
  isps[currentIndex].style.bottom = "0";
  isps.forEach((isp, index) => {
    if (index !== 0) {
      isp.style.transition = "none";
      isp.style.bottom = "-100%";
    }
  });
  function showNextISP() {
    isps[currentIndex].style.transition = "bottom 0.5s ease";
    isps[currentIndex].style.bottom = "100%";
    currentIndex = (currentIndex + 1) % isps.length;
    setTimeout(() => {
      isps[currentIndex].style.transition = "bottom 0.25s ease";
      isps[currentIndex].style.bottom = "0";
    }, 100);
  }
  timer = setInterval(showNextISP, 6e3);
  const container = document.querySelector(".rotating-container");
  container.addEventListener("mouseenter", () => clearInterval(timer));
  container.addEventListener("mouseleave", () => {
    timer = setInterval(showNextISP, 6e3);
  });
}
rotateISPs();
