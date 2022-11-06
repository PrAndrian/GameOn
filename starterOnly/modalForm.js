const firstField = document.getElementById("first");
const firstError = document.getElementById("firstError");

const lastField = document.getElementById("last");
const lastError = document.getElementById("lastError");

const emailField = document.getElementById("email");
const emailError  = document.getElementById("emailError");

const birthdateField = document.getElementById("email");
const birthdateError = document.getElementById("emailError");

const quantityField = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const checkField = document.querySelectorAll(".checkbox-input");
const checkError = document.querySelector("#checkbox-input-error");

const checkFieldCondition = document.querySelector("#checkbox1");
const checkFieldConditionError = document.querySelector("#checkFieldConditionError");

firstError.style.display="none";
lastError.style.display="none";
emailError.style.display="none";
quantityError.style.display="none";
checkError.style.display="none";
checkFieldConditionError.style.display="none";

function error_message(error){
    error.style.display="block";
    error.style.color="red";
    error.style.fontSize="16px";
}

document.querySelector(".btn-submit").addEventListener("click", (event)=>{
    if(firstField.value.length == 0 || firstField.value.length < 2){
        error_message(firstError);
        event.preventDefault();
    }else{
        firstError.style.display="none";
        event.preventDefault();
    }
    
    if(lastField.value.length == 0 || lastField.value.length < 2){
        error_message(lastError);
        event.preventDefault();
    }else{
        lastError.style.display="none";
        event.preventDefault();
    }
    

//  (@). Cette partie est le premier groupe de capture.
//  (.+) Correspond à une ou plusieurs occurrences d'un caractère quelconque. Cette partie est le deuxième groupe de capture.
//  $	Termine la correspondance à la fin de la chaîne.
    if(!emailField.value.match(/((['a-zA-Z])|((['a-zA-Z])(.)(['a-zA-Z])))(@)(['a-zA-Z])(.)(['a-zA-Z])/)){
        error_message(emailError);
        event.preventDefault();
    }else{
        emailError.style.display="none";
        event.preventDefault();
    }

    if((Number.isInteger(quantityField.value) || quantityField.value < 0) || quantityField.value==0 ){
        error_message(quantityError);
        event.preventDefault();
    }else{
        quantityError.style.display="none";
        event.preventDefault();
    }

    let checkArray = Array();
    for( i=1; i<7; i++){
        result = document.getElementById('location'+i).checked;
        checkArray.push(result);
    }

    if(!checkArray.includes(true)){
        error_message(checkError);
        event.preventDefault();
    }
    
    if(checkFieldCondition.checked == false){
        error_message(checkFieldConditionError);
        event.preventDefault();
    }
});