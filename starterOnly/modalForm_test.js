const form = document.querySelector('form[name="reserve"]');

const firstField = document.querySelector("#first");
const lastField = document.querySelector("#last");
const emailField = document.querySelector("#email");
const quantityField = document.querySelector("#quantity");
const birthdateField = document.querySelector("#birthdate");
const radioField = document.querySelector(".checkbox-input"); 
const checkFieldCondition = document.querySelector("#checkbox1");

const formfields = new Array(
    firstField,
    lastField,
    emailField,
    quantityField,
    birthdateField,
    radioField,
    checkFieldCondition
) 

let error = false;

//-------------------
formfields.forEach(field => {
    field.addEventListener('input', e => {
        condition(e.target,field);
    })
});

//-------------------
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    formfields.forEach(field => {
        condition(field,field);
    })

    if(!error){
        submitSucess();
        form.submit();
    }

    return false;
})

//-------------------
function setError(condition, field){
    if(condition){
        field.parentElement.setAttribute("data-error-visible", "true");
        error = true;
    }
    else{
        field.parentElement.setAttribute("data-error-visible", "false");
        error = false;
    }
}   

//------Condition-of-field
function submitSucess(){
    document.querySelector('.modal-body').style.display = "none";
    document.querySelector('.success_ui').style.display = "block";
    document.querySelector("form").reset();
}

//------Condition-of-field
function condition(element,field){

    switch (element) {
        case firstField:
            setError(element.value.length == 0 || element.value.length < 2, field);
        break;

        case lastField:
            setError(element.value.length == 0 || element.value.length < 2, field);
        break;
            
        case emailField:
            setError(!element.value.match(/((['a-zA-Z])|((['a-zA-Z])(.)(['a-zA-Z])))(@)(['a-zA-Z])(.)(['a-zA-Z])/), field);
        break;

        case birthdateField:
            setError(element.value.length==0, field);
        break;

        case quantityField:
            setError(Number.isInteger(element.value) || element.value < 0 || element.value.length == 0, field);
        break;

        case radioField:
            let checkArray = Array();
            for( i=1; i<7; i++){
                result = document.getElementById('location'+i).checked;
                checkArray.push(result);
            }
            setError(!checkArray.includes(true), field);
        break;

        case checkFieldCondition:
            setError((element.checked == false), field);
        break;
        
        default : break;
    }
}