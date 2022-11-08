
//--Conditions

function conditions(field){
    const firstField = document.querySelector("#first");
    const lastField = document.querySelector("#last");
    const emailField = document.querySelector("#email");
    const quantityField = document.querySelector("#quantity");
    const birthdateField = document.querySelector("#birthdate");
    // const radioField = document.querySelectorAll(".checkbox-input");
    const checkFieldCondition = document.querySelector("#checkbox1");
   
    if(field==firstField || field==lastField){
        return (field.value.length == 0 || field.value.length < 2);
    }

    if(field==emailField){
        return (!field.value.match(/((['a-zA-Z])|((['a-zA-Z])(.)(['a-zA-Z])))(@)(['a-zA-Z])(.)(['a-zA-Z])/));
    }

    if(field==quantityField){
        return (Number.isInteger(field.value) || field.value == 0 || field.value < 0 );
    }

    if(field==birthdateField){
        return (field.value.length==0);
    }
  
    if(field==checkFieldCondition){
        return (field.checked == false);
    }

    // let checkArray = Array();
    // for( i=1; i<7; i++){
    //     result = document.getElementById('location'+i).checked;
    //     checkArray.push(result);
    // }

    // if(field==radioField){
    //     return checkArray.includes(true);
    // }     
    

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

// function checkInput_cities(field,onsubmit,handler){
//     if(conditions(field)){
//         onsubmit.preventDefault();
//         field[0].parentElement.setAttribute("data-error-visible", "true");
//         handler(field);
//     }else{
//         field[0].parentElement.setAttribute("data-error-visible", "false");
//     }
// }

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

function handleChange_birthdate(field){
    field.addEventListener("input", (event)=>{
        error_message_birthdate(field,event);
    });
}

function handleChange_checkFieldCondition(field){
    field.addEventListener("input", (event)=>{
        error_message_checkFieldCondition(field,event);
    });
}

// function handleChange_radio(field){
//     let checkArray = Array();
//     for( i=1; i<7; i++){
//         result = document.getElementById('location'+i).checked;
//         checkArray.push(result);
//     }
    
//     field.addEventListener("input", (event)=>{
//         error_message_radio(field,event,checkArray);
//     });
// }

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

function error_message_birthdate(field,event){
    if(event.target.value.length==0){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

function error_message_checkFieldCondition(field,event){
    if(event.target.checked == false){
        field.parentElement.setAttribute("data-error-visible", "true");
    }else{
        field.parentElement.setAttribute("data-error-visible", "false");
    }
}    

// function error_message_radio(field,event,radioArray){
//     if(radioArray.includes(true)){
//         field.parentElement.setAttribute("data-error-visible", "false");
//     }else{
//         field.parentElement.setAttribute("data-error-visible", "true");
//     }
// }    

    
document.querySelector(".btn-submit").addEventListener("click", (event)=>{
    const firstField = document.querySelector("#first");
    const lastField = document.querySelector("#last");
    const emailField = document.querySelector("#email");
    const quantityField = document.querySelector("#quantity");
    const birthdateField = document.querySelector("#birthdate");
    // const radioField = document.querySelectorAll(".checkbox-input");
    const checkFieldCondition = document.querySelector("#checkbox1");

    checkInput(firstField,event,handleChange_first_last);
    checkInput(lastField,event,handleChange_first_last);
    checkInput(emailField,event,handleChange_email);
    checkInput(quantityField,event,handleChange_quatity);
    checkInput(birthdateField,event,handleChange_birthdate);
    checkInput(checkFieldCondition,event,handleChange_checkFieldCondition);
    // checkInput_cities(radioField,event,handleChange_radio);

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