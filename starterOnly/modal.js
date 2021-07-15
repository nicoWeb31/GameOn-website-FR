const ERR_LAST = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ERR_FIRST =
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const ERR_BIRTHDAY = "Vous devez entrer votre date de naissance.";
const ERR_TOURNOIS = "Vous devez entrer une valeur.";

const ERR_EMAIL = "Vous devez entrer votre Email.";
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
const inputFirst = document.querySelector("#first");
const inputName = document.querySelector("#last");
const inputEmail = document.querySelector("#email");
const birthday = document.querySelector("#birthdate");
const inputQuantity = document.querySelector("#quantity");
const formData = document.querySelectorAll(".formData");
const cuCheckBox = document.querySelector("#checkbox1");
const checkBox2 = document.querySelector("#checkbox2");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("#form");

//loc Element
const loc = document.getElementsByName("loc");

//input location

//ErrorElement
const lastErr = document.getElementById("lastError");
const birthErr = document.getElementById("birthdateError");
const cityErr = document.getElementById("cityError");
const conditiontErr = document.getElementById("conditionError");
const firstErr = document.getElementById("firstError");
const emailErr = document.getElementById("emailError");
const tournoisErr = document.getElementById("tournoisError");

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
    clearForm();
    modalbg.style.display = "none";

}
closeBtn.addEventListener("click", close);

/* -------------------------------------------------------------------------- */
/*                              gestion du submit                             */
/* -------------------------------------------------------------------------- */

handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const condition = cuCheckBox.checked;
    const firsValue = inputFirst.value.trim();
    const lastValue = inputName.value.trim();
    const emailValue = inputEmail.value.trim();
    const birthdayValue = birthday.value.trim();
    const quantityValue = +inputQuantity.value.trim();
    const citiesValues = getValueCheckBox(loc);
    const infoEvent = checkBox2.checked;
    const body = {
        name: firsValue,
        lastName: lastValue,
        email: emailValue,
        birthday: birthdayValue,
        nbrTournois: quantityValue,
        cityValue: citiesValues,
        infoEvent,
    };

    if (
        !condition ||
        body.name.length < 2 ||
        body.lastName.length < 2 ||
        !body.email ||
        !body.birthday ||
        !body.cityValue.length > 0 ||
        isNaN(body.nbrTournois)
    ) {
        // inputErrorHandler(inputName, ERR_LAST, lastErr);
        // inputErrorHandlerRefacto(valueControlLengthTwo(inputName))(
        //     ERR_LAST,
        //     lastErr
        // );

        inputErrorHandlerRefacto3(valueControlLengthTwo(inputName))(lastErr)(
            ERR_LAST
        );

        // inputErrorHandler(inputFirst, ERR_FIRST, firstErr);
        inputErrorHandlerRefacto(valueControlLengthTwo(inputFirst))(
            ERR_FIRST,
            firstErr
        );
        // inputErrorHandler(inputEmail, ERR_EMAIL, emailErr);
        inputErrorHandlerRefacto(valueControlLengthTwo(inputEmail))(
            ERR_EMAIL,
            emailErr
        );
        // numberErrorHandler(inputQuantity, ERR_TOURNOIS, tournoisErr);
        inputErrorHandlerRefacto(valueExist(inputQuantity))(
            ERR_TOURNOIS,
            tournoisErr
        );
        // birthDateErrorHandler(birthday, ERR_BIRTHDAY, birthErr);
        inputErrorHandlerRefacto(valueExist(birthday))(ERR_BIRTHDAY, birthErr);

        cityErrorHandler(loc, ERR_VILLE_CHOICE, cityErr);
        conditionErrorHandler(cuCheckBox, ERR_CONDITION, conditiontErr);
    } else {
        console.log(body, "form ok ");
        httpPostdata(body);
    }
};

//form submit
form.addEventListener("submit", handleFormSubmit);

/* -------------------------------------------------------------------------- */
/*                                    utils                                    */
/* -------------------------------------------------------------------------- */

const clearForm = () => {
    inputFirst.value = null;
    inputName.value = null;
    inputEmail.value = null;
    birthday.value = null;
    inputQuantity.value = null;
    lastErr.innerHTML = null;
    birthErr.innerHTML = null;
    cityErr.innerHTML = null;
    conditiontErr.innerHTML = null;
    firstErr.innerHTML = null;
    emailErr.innerHTML = null;
    tournoisErr.innerHTML= null;
};

const conditionErrorHandler = (input, message, output) => {
    if (!input.checked) {
        output.innerText = message;
    } else {
        output.innerText = "";
    }
};

const cityErrorHandler = (input, message, output) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            output.innerText = "";
            return true;
        } else {
            output.innerText = message;
        }
    }
};

const getValueCheckBox = (arr) => {
    let valueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            valueArray.push(arr[i].value);
        }
    }
    return valueArray;
};

//call http method
async function httpPostdata(body) {
    return fetch("https://mockbin.com/request", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function () {
            console.log(body);
            clearForm();
            close();
            alert("votre resavation à été effectué !");
        });
}
/* -------------------------- curing test refacto -------------------------- */

const valueControlLengthTwo = (input) => {
    return input.value.length < 2;
};

const valueExist = (input) => {
    return !input.value;
};

const inputErrorHandlerRefacto = (fn) => {
    return function message(message, output) {
        if (fn) {
            output.innerText = message;
        } else {
            output.innerText = "";
        }
    };
};

// const inputErrorHandlerRefacto2 = (fn) => {
//     return function setOutPut(output) {
//         const output = output;
//         return function setMessage(message) {
//             if (fn) {
//                 output.innerText = message;
//             } else {
//                 output.innerText = "";
//             }
//         };
//     };
// };

const inputErrorHandlerRefacto3 = (fn) => (output) => (message) => {
    if (fn) {
        output.innerText = message;
    } else {
        output.innerText = "";
    }
};
