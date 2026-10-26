// ===== 1. MOBILE NAVIGATION =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== 2. CATEGORY FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Highlight the clicked button
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    const filter = button.dataset.filter;

    dishes.forEach(function (dish) {
      dish.classList.remove("fade-in");
      if (filter === "all" || dish.dataset.category === filter) {
        dish.classList.remove("hide");
        void dish.offsetWidth;           // restart the animation
        dish.classList.add("fade-in");   // smooth fade-in
      } else {
        dish.classList.add("hide");
      }
    });
  });
});

// ===== 3. CONTACT FORM VALIDATION (demo only, nothing is sent) =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const success = document.getElementById("formSuccess");
  let valid = true;

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  success.textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email check
  if (email === "") {
    document.getElementById("emailError").textContent = "Please enter your email.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Please write a message.";
    valid = false;
  }

  if (valid) {
    success.textContent = "Thank you, " + name + "! This is a demo form, so no real email was sent.";
    form.reset();
  }
});

// ===== 4. IMAGE FALLBACK =====
// If an image fails to load, hide it so the colored background shows instead
document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("error", function () {
    img.classList.add("img-failed");
  });
});

// ===== 5. CURRENT YEAR IN FOOTER =====
document.getElementById("year").textContent = new Date().getFullYear();
