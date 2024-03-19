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

const cardInner = document.querySelector(".card__inner");

// Add event listener for mouseover to change cursor style
cardInner.addEventListener("mouseover", function (event) {
  // Check if the mouseover event happened on a child element with class .card__content
  if (event.target.classList.contains("card__content")) {
    // Change cursor style to pointer
    event.target.style.cursor = "pointer";
  }
});

// Add event listener for click to redirect to the home page
cardInner.addEventListener("click", function (event) {
  // Check if the click event happened on a child element with class .card__content
  if (event.target.classList.contains("card__content")) {
    // Redirect to the home page
    window.location.href = "/";
  }
});
