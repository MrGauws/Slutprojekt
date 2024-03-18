// Get all ISP elements
const isps = document.querySelectorAll(".rotating-container .isp");

// Function to rotate ISPs
function rotateISPs() {
  // Initialize index and timer
  let currentIndex = 0;
  let timer;

  // Show the first ISP initially
  isps[currentIndex].style.transition = "bottom 0.25s ease";
  isps[currentIndex].style.bottom = "0";

  // Hide all ISPs except the first one
  isps.forEach((isp, index) => {
    if (index !== 0) {
      isp.style.transition = "none";
      isp.style.bottom = "-100%";
    }
  });

  // Function to show the next ISP
  function showNextISP() {
    // Hide the current ISP
    isps[currentIndex].style.transition = "bottom 0.5s ease";
    isps[currentIndex].style.bottom = "100%";

    // Increment index or reset to 0 if reaching the end
    currentIndex = (currentIndex + 1) % isps.length;

    // Show the next ISP after a short delay
    setTimeout(() => {
      isps[currentIndex].style.transition = "bottom 0.25s ease";
      isps[currentIndex].style.bottom = "0";
    }, 100); // Adjust the delay as needed
  }

  // Start rotating ISPs
  timer = setInterval(showNextISP, 6000); // Adjust the interval (6000ms = 6 seconds)

  // Pause rotation when mouse hovers over the rotating container
  const container = document.querySelector(".rotating-container");
  container.addEventListener("mouseenter", () => clearInterval(timer));

  // Resume rotation when mouse leaves the rotating container
  container.addEventListener("mouseleave", () => {
    timer = setInterval(showNextISP, 6000); // Adjust the interval (6000ms = 6 seconds)
  });
}

// Call rotateISPs function to start the rotation
rotateISPs();
