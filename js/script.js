const navMenu = document.getElementById("nav_bar");

function menuScroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navMenu.className = "on_scroll_color";
  } else {
    navMenu.className = "navigation";
  }
}

window.onscroll = function() {
  menuScroll();
};
