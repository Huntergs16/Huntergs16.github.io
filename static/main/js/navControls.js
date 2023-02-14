/**
 * Script for menu button
 */
let menuOpen = false;
const menuButton = document.querySelector(`.dropdown-content`);
console.log(menuButton);
console.log(menuButton.getAttribute("style"));

document
  .getElementById("dropDownBtn")
  .addEventListener("click", dropDownClicked);

function dropDownClicked() {
  console.log(`ButtonClicked`);
  if (menuOpen === false) {
    menuButton.setAttribute("style", "display:block");
    menuOpen = true;
  } else {
    menuButton.setAttribute("style", "display:none");
    menuOpen = false;
  }
}

addEventListener("resize", (event) => {
  if (window.innerWidth > 650) {
    menuButton.setAttribute("style", "display:none");
  }
});

window.addEventListener(
  "orientationchange",
  function () {
    menuButton.setAttribute("style", "display:none");
    menuOpen = false;
  },
  false
);
/**
 * End of script for menu button
 */
