// THIS IS WHERE THE MAGIC HAPPENS

// Sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// Parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax, {});

// Tabs
const tabs = document.querySelectorAll(".tabs");
M.Tabs.init(tabs);

// Scrollspy
const scrollspy = document.querySelectorAll(".scrollspy");
M.Scrollspy.init(scrollspy);