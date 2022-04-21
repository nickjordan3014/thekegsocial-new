function stayIntheKnowValidation() {
    //Validation Variables
    let validationVariables = [
        {
            element : document.getElementById("first_name"),
            elementSpan : document.getElementById("fn_span"),
            regEx : /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            validated : false,
        },
        {
            element : document.getElementById("last_name"),
            elementSpan : document.getElementById("ln_span"),
            regEx : /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            validated : false,
        },
        {
            element : document.getElementById("email"),
            elementSpan : document.getElementById("email_span"),
            regEx : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            validated : false,
        }
    ];
    // Used to validate inputs to ensure button can be used by user
    let isitTrue = [ 
        item1 = false,
        item2 = false,
        item3 = false
    ];
    // Individual function calls to validate each form item
    validationVariables[0].element.onblur = function(){ // FIRST NAME
        mainValidation(validationVariables, validationVariables[0], isitTrue);
    } 
    validationVariables[1].element.onblur = function(){ // LAST NAME
        mainValidation(validationVariables, validationVariables[1], isitTrue);
    } 
    validationVariables[2].element.onblur = function(){ // EMAIL
        mainValidation(validationVariables, validationVariables[2], isitTrue);
    } 
}

//calls all functions to change classes of elements
function mainValidation(props, key, boolean) {
        changeClass(key);
        if(unlockButton(props, boolean)) {
            enableButton();
        } else {
            disableButton();
        }
}

function disableButton() { //Disables button and changes buttons class
    let submitButton = document.getElementById("submit_sitk");
    submitButton.disabled = true;
    submitButton.removeAttribute("class");
    submitButton.setAttribute("class", "submit-disabled")
}

function enableButton() { //enables button and changes buttons class
    let submitButton = document.getElementById("submit_sitk");
    submitButton.disabled = false;
    submitButton.removeAttribute("class");
    submitButton.setAttribute("class", "submit-sitk")
}

function changeClass(object) { // shows hints if users input is wrong
    if (object.element.value.match(object.regEx)) {
        object.elementSpan.setAttribute("class", "validationCorrect");
        object.validated = true;
    } else {
        
        object.elementSpan.removeAttribute("class");
        object.validated = false;
    }
}

function unlockButton(object, isitTrue) { // unlocks the button if all inputs are correct 
    for (i = 0; i < 3; i++) {
        if (object[i].validated == true) {
            isitTrue[i] = true;
        } else {
            isitTrue[i] = false; 
            isitTrue[2] = false;
            break; // will never validate last value unless all values before are true
        }
    }

    if ((isitTrue[2]) == true) { // only when the last value is made true, will submit unlock
        return true;
    } else {
        return false;
    }
}

window.addEventListener("load", stayIntheKnowValidation, false);