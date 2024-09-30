const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".profile", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".history", {
  ...scrollRevealOption,
  interval: 500,
  duration: 500,
  delay: 400,
});

ScrollReveal().reveal(".video", {
  ...scrollRevealOption,
  interval: 500,
  duration: 500,
  delay: 400,
});

ScrollReveal().reveal(".article", {
  ...scrollRevealOption,
  interval: 500,
  duration: 500,
  delay: 400,
});

ScrollReveal().reveal(".credit", {
  ...scrollRevealOption,
  interval: 500,
  duration: 500,
  delay: 400,
});

