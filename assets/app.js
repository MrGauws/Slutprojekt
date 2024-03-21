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
  const element = document.querySelector(
    "._19gi7yt0._19gi7ytj._1fragemks._19gi7ytb"
  );
  if (element) {
    element.textContent = "Complete";
  }
});
