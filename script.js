const modeToggle = document.getElementById("mode-toggle");
let isDarkMode = false;

modeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.style.background = "gold";
    document.body.text.color = "#000";

    modeToggle.textContent = "🌞"; // Change to sun icon
  } else {
    document.body.style.background = "#fff";
    Document.body.style.color = "#green";
    modeToggle.textContent = "🌙"; // Change to moon icon
  }
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Get the form element
const form = document.getElementById("newsletter-form-2");

// Add an event listener to the form
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the email input value
  const email = document.getElementById("email").value;

  // Validate the email input value
  if (email === "") {
  } else {
    // Send a request to the server to subscribe the user
    fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        if (data.success) {
          alert("Thank you for subscribing to our newsletter!");
        } else {
          alert("An error occurred. Please try again later.");
        }
      })
      .catch((error) => {
        // Handle any errors that occur
        alert("An error occurred. Please try again later.");
      });
  }
});

AOS.init({
  duration: 1200, // Animation duration in milliseconds
  offset: 200, // Offset for animation start
});
// JavaScript to toggle the form visibility
function toggleForm() {
  const form = document.getElementById("contact-form");
  form.classList.toggle("hidden");
}
