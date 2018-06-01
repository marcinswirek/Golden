function dropdownMenu() {
  const myMenu = document.getElementById("dropdown_menu");
  if (myMenu.style.display == "block") {
    myMenu.style.display == "none";
  } else {
    myMenu.style.display == "block";
  }
}

document.getElementById("menu_btn_media").onclick = function() {
  dropdownMenu();
};
