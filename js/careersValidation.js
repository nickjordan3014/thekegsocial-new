//Disables button and changes buttons class
function disableButtonC() { 
    let submitButtonC = document.getElementById("submitCareers");
    submitButtonC.disabled = true;
    submitButtonC.removeAttribute("class");
    submitButtonC.setAttribute("class", "submitCareersDisabled ")
}
//enables button and changes buttons class
function enableButtonC() { 
    let submitButtonC = document.getElementById("submitCareers");
    submitButtonC.disabled = false;
    submitButtonC.removeAttribute("class");
    submitButtonC.setAttribute("class", "submit")
}
// shows hints if users input is wrong
function changeClassC(careersObject) { 
    if (careersObject.element.value.match(careersObject.regEx)) {
        careersObject.elementSpan.setAttribute("class", "validationCorrect");
        careersObject.validated = true;
    } else {
        careersObject.elementSpan.removeAttribute("class");
        careersObject.validated = false;
    }
}
// unlocks the button if all inputs are correct 
function unlockButtonC(careersObject, isItValidated) { 
    for (i = 0; i < 2; i++) {
        if (careersObject[i].validated == true) {
            isItValidated[i] = true;
        } else {
            isItValidated[i] = false; 
            isItValidated[1] = false; 
            break; // will never validate last value unless all values before are true
        }
    }

    if ((isItValidated[1]) == true) { // only when the last value is made true, will submit unlock
        return true;
    } else {
        return false;
    }
}
// Main Validation function
function mainValidationC(careersProps, careersKey, careersBoolean) {
    changeClassC(careersKey);
        if(unlockButtonC(careersProps, careersBoolean)) {
            enableButtonC();
        } else {
            disableButtonC();
        }
}


// Function to call other validation functions
function careersValidation() {
    // Object to get items from careers form
    let validationVariablesC = [
        {
            element : document.getElementById("firstName"),
            elementSpan : document.getElementById("firstNameValidation"),
            regEx : /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            validated : false
        },
        {
            element : document.getElementById("lastName"),
            elementSpan : document.getElementById("lastNameValidation"),
            regEx : /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            validated : false
        }
    ];  
    // Testing whether all appropriate items are validated
    let isItValidated = [
        item1 = false,
        item2 = false
    ];

    validationVariablesC[0].element.onblur = function() {
        mainValidationC(validationVariablesC, validationVariablesC[0], isItValidated);
    }
    validationVariablesC[1].element.onblur = function() {
        mainValidationC(validationVariablesC, validationVariablesC[1], isItValidated);
    }
}

window.addEventListener("load", careersValidation, false);