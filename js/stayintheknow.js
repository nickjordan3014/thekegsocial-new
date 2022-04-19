function stayIntheKnowValidation() {
    //Validation Variables
    let validationVariables = [
        {
            element : document.getElementById("first_name"),
            elementSpan : document.getElementById("fn_span"),
            regEx : /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            validated : false 
        },
        {
            element : document.getElementById("last_name"),
            elementSpan : document.getElementById("ln_span"),
            regEx : /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
            validated : false 
        },
        {
            element : document.getElementById("email"),
            elementSpan : document.getElementById("email_span"),
            regEx : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            validated : false 
        }
    ];
    
    let isitTrue = [ // Used to validate inputs to ensure button can be used by user
        item1 = false,
        item2 = false,
        item3 = false
    ];

    // FIRST NAME
    validationVariables[0].element.onblur = function(){
        changeClass(validationVariables[0]);
        if(unlockButton(validationVariables, isitTrue)) {
            enableButton();
        } else {
            disableButton();
        }
    } 
    // LAST NAME
    validationVariables[1].element.onblur = function(){
        changeClass(validationVariables[1]);
        if(unlockButton(validationVariables, isitTrue)) {
            enableButton();
        } else {
            disableButton();
        }
    } 
    // EMAIL
    validationVariables[2].element.onblur = function(){
        changeClass(validationVariables[2]);
        if(unlockButton(validationVariables, isitTrue)) {
            enableButton();
        } else {
            disableButton();
        }
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
        object.elementSpan.setAttribute("class", "right");
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
        }
    }

    if ((isitTrue[0] && isitTrue[1] && isitTrue[2]) == true) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener("load", stayIntheKnowValidation, false);