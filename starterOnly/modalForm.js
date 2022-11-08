const checkField = document.querySelectorAll(".checkbox-input");
const checkError = document.querySelector("#checkbox-input-error");

const checkFieldCondition = document.querySelector("#checkbox1");
const checkFieldConditionError = document.querySelector("#checkFieldConditionError");

checkError.style.display="none";
checkFieldConditionError.style.display="none";

//--Conditions

function conditions(field){
    const firstField = document.querySelector("#first");
    const lastField = document.querySelector("#last");
    const emailField = document.querySelector("#email");
    const quantityField = document.querySelector("#quantity");
   
    if(field==firstField || field==lastField){
        return (field.value.length == 0 || field.value.length < 2);
    }

    if(field==emailField){
        return (!field.value.match(/((['a-zA-Z])|((['a-zA-Z])(.)(['a-zA-Z])))(@)(['a-zA-Z])(.)(['a-zA-Z])/));
    }

    if(field==quantityField){
        return (Number.isInteger(field.value) || field.value == 0 || field.value < 0 );
    }
}

//----checkInput
function checkInput(field,onsubmit,handler){
    if(conditions(field)){
        onsubmit.preventDefault();
        field.parentElement.setAttribute("data-error-visible", "true");
        handler(field);
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}
//----handler
function handleChange_first_last(field){
    field.addEventListener("input", (event)=>{
        error_message_first_last(field,event);
    });
}

function handleChange_email(field){
    field.addEventListener("input", (event)=>{
        error_message_email(field,event);
    });
}

function handleChange_quatity(field){
    field.addEventListener("input", (event)=>{
        error_message_quatity(field,event);
    });
}

//----error-message
function error_message_first_last(field,event){
    if(event.target.value.length == 0 || event.target.value.length < 2){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

function error_message_email(field,event){
    if(!event.target.value.match(/((['a-zA-Z])|((['a-zA-Z])(.)(['a-zA-Z])))(@)(['a-zA-Z])(.)(['a-zA-Z])/)){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

function error_message_quatity(field,event){
    if(Number.isInteger(event.target.value) || event.target.value == 0 || event.target.value < 0){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

    
document.querySelector(".btn-submit").addEventListener("click", (event)=>{
    const firstField = document.querySelector("#first");
    const lastField = document.querySelector("#last");
    const emailField = document.querySelector("#email");
    const quantityField = document.querySelector("#quantity");

    checkInput(firstField,event,handleChange_first_last);
    checkInput(lastField,event,handleChange_first_last);
    checkInput(emailField,event,handleChange_email);
    checkInput(quantityField,event,handleChange_quatity);

    // if((Number.isInteger(quantityField.value) || quantityField.value <= 0)){
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