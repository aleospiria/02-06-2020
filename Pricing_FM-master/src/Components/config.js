import React from "react";
function Config(){
window.onscroll = function() {myFunction()};

// Get the navbar
var navBar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}

}

export default Config