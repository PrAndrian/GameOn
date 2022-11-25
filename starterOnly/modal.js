function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
  document.querySelector('.modal-body').style.display = "block";
  document.querySelector('.success_ui').style.display = "none";
  document.querySelector('body').style.overflow = "hidden";
  document.querySelector('body').style.height = "100%";
  document.querySelector('.topnav').style.position = "fixed";

}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector('body').style.overflow = "visible";
  document.querySelector('body').style.height = "auto"; 
  document.querySelector('.topnav').style.position = "static";   
}

