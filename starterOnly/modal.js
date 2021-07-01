const ERR_LAST = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ERR_BIRTHDAY = "Vous devez entrer votre date de naissance.";
const ERR_CONDITION =
    "Vous devez vérifier que vous acceptez les termes et conditions.";
const ERR_VILLE_CHOICE = "Vous devez choisir une option.\n";

function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* -------------------------------------------------------------------------- */
/*                                DOM Elements                                */
/* -------------------------------------------------------------------------- */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const btnSubmit = document.querySelector(".btn-submit");
const inputName = document.querySelector("#last");
const birthday = document.querySelector("#birthdate");
const formData = document.querySelectorAll(".formData");
const cuCheckBox = document.querySelector("#checkbox1");
const closeBtn = document.querySelector(".close");

//loc Element
const loc1 = document.querySelector("#location1");
const loc2 = document.querySelector("#location2");
const loc3 = document.querySelector("#location3");
const loc4 = document.querySelector("#location4");
const loc5 = document.querySelector("#location5");
const loc6 = document.querySelector("#location6");

//ErrorElement
const lastErr = document.getElementById("lastError");
const birthErr = document.getElementById("birthdateError");
const cityErr = document.getElementById("cityError");
const conditiontErr = document.getElementById("conditionError");

/* -------------------------------------------------------------------------- */
/*                                gestoin Modal                               */
/* -------------------------------------------------------------------------- */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//close modal
function close() {
    modalbg.style.display = "none";
}
closeBtn.addEventListener("click", close);

/* -------------------------------------------------------------------------- */
/*                              gestion du submit                             */
/* -------------------------------------------------------------------------- */

// validation form
const formIsValid = () => {
    alert("votre resavation à été effectué !");
};

handleFormSubmit = () => {
    birthdayErrorInner(isBirthDayError());
    lastNameError(isLastNameErr());
    handleConditiontErr(isConditionalErr());

    // formIsValid();
    // close();
    // if (firstNameError() && BirthdayError() && handleConditiontErr()) {
    //   console.log("err");
    // } else {
    // }
};

btnSubmit.addEventListener("submit", handleFormSubmit);

// () => {
// if (inputName.value.length < 2) {
//   error += "Veuillez entrer 2 caractères ou plus pour le champ du nom. \n";
// }

// if (!birthday.value) {
//   error += "Vous devez entrer votre date de naissance. \n";
// }

// if (!cuCheckBox[0].checked) {
//   error +=
//     "Vous devez vérifier que vous acceptez les termes et conditions. \n";
// }

// if (

// ) {
//   error += ;
// }

/* -------------------------------------------------------------------------- */
/*                             gestion des erreurs                            */
/* -------------------------------------------------------------------------- */

isLastNameErr = () => {
    console.log(inputName.value.length < 2);
    return inputName.value.length < 2;
};
lastNameError = (fn) => {
    fn ? (lastErr.innerText = ERR_LAST) : (lastErr.innerText = "");
};

isBirthDayError = () => {
    return !birthday.value;
};
birthdayErrorInner = (fn) => {
    fn ? (birthErr.innerText = ERR_BIRTHDAY) : (birthErr.innerText = "");
};

// cityErr = () => {
//   if (
//     !loc1.value ||
//     !loc2.value ||
//     !loc3.value ||
//     !loc4.value ||
//     !loc4.value ||
//     !loc5.value ||
//     !loc6.value
//   ) {
//     const err = ERR_VILLE_CHOICE;
//     cityErr.innerText = err;
//     return err;
//   } else {
//     cityErr.innerText = err;
//   }
// };

isConditionalErr = () => {
  console.log(cuCheckBox)
    return cuCheckBox.value === "ok";
};
handleConditiontErr = (fn) => {

    fn
        ? (conditiontErr.innerText = ERR_CONDITION)
        : (conditiontErr.innerText = "");
};
