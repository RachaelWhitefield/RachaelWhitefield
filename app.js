// THIS IS WHERE THE MAGIC HAPPENS

// Sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// Parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax, {});

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// Scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.Scrollspy.init(ss, {});

// Tabs
const instance = document.querySelectorAll(".tabs");
M.Tabs.init(el, options);