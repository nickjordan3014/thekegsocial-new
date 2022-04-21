//Disables button and changes buttons class
function disableButton() { 
    let submitButton = document.getElementById("submitCareers");
    submitButton.disabled = true;
    submitButton.removeAttribute("class");
    submitButton.setAttribute("class", "submit-disabled")
}
//enables button and changes buttons class
function enableButton() { 
    let submitButton = document.getElementById("submitCareers");
    submitButton.disabled = false;
    submitButton.removeAttribute("class");
    submitButton.setAttribute("class", "submit")
}
// shows hints if users input is wrong
function changeClass(object) { 
    if (object.element.value.match(object.regEx)) {
        object.elementSpan.setAttribute("class", "validationCorrect");
        object.validated = true;
    } else {
        
        object.elementSpan.removeAttribute("class");
        object.validated = false;
    }
}
// unlocks the button if all inputs are correct 
function unlockButton(object, isitTrue) { 
    for (i = 0; i < 1; i++) {
        if (object[i].validated == true) {
            isitTrue[i] = true;
        } else {
            isitTrue[i] = false; 
            // isitTrue[lastvalue] = false; 
            break; // will never validate last value unless all values before are true
        }
    }

    if ((isitTrue[0]) == true) { // only when the last value is made true, will submit unlock
        return true;
    } else {
        return false;
    }
}
// Main Validation function
function mainValidation(props, key, boolean) {
    changeClass(key);
        if(unlockButton(props, boolean)) {
            enableButton();
        } else {
            disableButton();
        }
}


// Function to call other validation functions
function careersValidation() {
    // Object to get items from careers form
    let validationVariables = [
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

    validationVariables[0].element.onblur = function() {
        mainValidation(validationVariables, validationVariables[0], isItValidated);
    }
    validationVariables[1].element.onblur = function() {
        mainValidation(validationVariables, validationVariables[1], isItValidated);
    }
}

window.addEventListener("load", careersValidation, false);