const quantityField = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const checkField = document.querySelectorAll(".checkbox-input");
const checkError = document.querySelector("#checkbox-input-error");

const checkFieldCondition = document.querySelector("#checkbox1");
const checkFieldConditionError = document.querySelector("#checkFieldConditionError");

quantityError.style.display="none";
checkError.style.display="none";
checkFieldConditionError.style.display="none";

// function checkInput(field,onsubmit){
//     if(field.value.length == 0 || field.value.length < 2){
//         onsubmit.preventDefault();
//         field.parentElement.setAttribute("data-error-visible", "true");
//         handleChange_first_last(field);
//     }else{
//         field.parentElement.setAttribute("data-error-visible", "false");
//     }
// }

function handleChange_first_last(field){
    field.addEventListener("input", (event)=>{
        error_message_first_last(field,event);
    });
}

function error_message_first_last(field,event){
    if(event.target.value.length == 0 || event.target.value.length < 2){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

function checkInput(field,onsubmit,handler){
    if(field.value.length == 0 || field.value.length < 2){
        onsubmit.preventDefault();
        field.parentElement.setAttribute("data-error-visible", "true");
        handler(field);
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}

function handleChange_email(field){
    field.addEventListener("input", (event)=>{
        error_message_first_last(field,event);
    });
}

function error_message_email(field,event){
    if(!event.target.value.match(/((['a-zA-Z])|((['a-zA-Z])(.)(['a-zA-Z])))(@)(['a-zA-Z])(.)(['a-zA-Z])/)){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

    
document.querySelector(".btn-submit").addEventListener("click", (event)=>{
    const firstField = document.querySelector("#first");
    const lastField = document.querySelector("#last");
    const emailField = document.querySelector("#email");

    // checkInput(firstField,event);
    // checkInput(lastField,event);
    checkInput(firstField,event,handleChange_first_last);
    checkInput(lastField,event,handleChange_first_last);
    checkInput(emailField,event,handleChange_email);

//  (@). Cette partie est le premier groupe de capture.
//  (.+) Correspond à une ou plusieurs occurrences d'un caractère quelconque. Cette partie est le deuxième groupe de capture.
//  $	Termine la correspondance à la fin de la chaîne.

    // if((Number.isInteger(quantityField.value) || quantityField.value < 0) || quantityField.value==0 ){
    //     error_message(quantityError);
    //     event.preventDefault();
    // }else{
    //     quantityError.style.display="none";
    //     event.preventDefault();
    // }

    // let checkArray = Array();
    // for( i=1; i<7; i++){
    //     result = document.getElementById('location'+i).checked;
    //     checkArray.push(result);
    // }

    // if(!checkArray.includes(true)){
    //     error_message(checkError);
    //     event.preventDefault();
    // }
    
    // if(checkFieldCondition.checked == false){
    //     error_message(checkFieldConditionError);
    //     event.preventDefault();
    // }
});