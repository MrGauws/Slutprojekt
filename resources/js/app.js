// Get all ISP elements
const isps = document.querySelectorAll(".rotating-container .isp");

// Function to rotate ISPs
function rotateISPs() {
  // Initialize index and timer
  let currentIndex = 0;
  let timer;

  // Show the first ISP initially
  isps[currentIndex].style.bottom = "0";

  // Hide all ISPs except the first one
  isps.forEach((isp, index) => {
    if (index !== 0) {
      isp.style.bottom = "100%";
    }
  });

  // Function to show the next ISP
  function showNextISP() {
    // Hide the current ISP
    isps[currentIndex].style.bottom = "100%";

    // Increment index or reset to 0 if reaching the end
    currentIndex = (currentIndex + 1) % isps.length;

    // Reset transition to none before moving it to the top
    isps[currentIndex].style.transition = "none";
    isps[currentIndex].style.bottom = "-100%";

    // Trigger a reflow before applying the transition
    void isps[currentIndex].offsetWidth; // This line forces a reflow

    // Apply the transition to move the next ISP from the bottom to the screen
    isps[currentIndex].style.transition = "bottom 0.5s ease";
    isps[currentIndex].style.bottom = "0";
  }

  // Start rotating ISPs
  timer = setInterval(showNextISP, 5000); // Adjust the interval (5000ms = 5 seconds)

  // Pause rotation when mouse hovers over the rotating container
  const container = document.querySelector(".rotating-container");
  container.addEventListener("mouseenter", () => clearInterval(timer));

  // Resume rotation when mouse leaves the rotating container
  container.addEventListener("mouseleave", () => {
    timer = setInterval(showNextISP, 5000); // Adjust the interval (5000ms = 5 seconds)
  });
}

// Call rotateISPs function to start the rotation
rotateISPs();

document.addEventListener("DOMContentLoaded", function () {
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

  // Add event listeners for mega menu content elements
  document.addEventListener("mouseover", function (event) {
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

  document.addEventListener("mouseout", function (event) {
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
