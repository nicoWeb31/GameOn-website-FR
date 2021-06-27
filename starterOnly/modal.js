function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const btnSubmit = document.querySelector(".btn-submit");
const inputName = document.querySelector("#last");
const birthday = document.querySelector("#birthdate");
const formData = document.querySelectorAll(".formData");
const cuCheckBox = document.querySelectorAll("#checkbox1");

const loc1 = document.querySelector("#location1");
const loc2 = document.querySelector("#location2");
const loc3 = document.querySelector("#location3");
const loc4 = document.querySelector("#location4");
const loc5 = document.querySelector("#location5");
const loc6 = document.querySelector("#location6");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//comfirm ok button
btnSubmit.addEventListener("click", () => {
  let error = "";
  if (inputName.value.length < 2) {
    error += "Veuillez entrer 2 caractères ou plus pour le champ du nom. \n";
  }

  if (!birthday.value) {
    error += "Vous devez entrer votre date de naissance. \n";
  }

  if (!cuCheckBox[0].checked) {
    error +=
      "Vous devez vérifier que vous acceptez les termes et conditions. \n";
  }

  if (
    !loc1.value ||
    !loc2.value ||
    !loc3.value ||
    !loc4.value ||
    !loc4.value ||
    !loc5.value ||
    !loc6.value
  ) {
    error += "Vous devez choisir une option.\n";
  }

  alert(error ? error : "résa ok ");
});

/* ---------------------------- formulaire valid ---------------------------- */
if(true){
  btnSubmit.disabled = false;
}


