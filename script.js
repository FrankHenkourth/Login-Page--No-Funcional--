document.addEventListener("DOMContentLoaded", function() {const toggleDarkMode = document.querySelector(".toggle-dark-mode");
toggleDarkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".container, h2, label, input, button, p, a").forEach(function(element) {
      element.classList.toggle("dark-mode");
    });
  });
});