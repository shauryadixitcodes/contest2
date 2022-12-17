let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let button = document.getElementById('submit');
let errorDiv1 = document.getElementById('error');
let errorDiv2 = document.getElementById('error-Two')


passwordInput.addEventListener('keypress', validate2)
emailInput.addEventListener('keypress',validate1);

function validate1(){

    let email = emailInput.value 
    let password = passwordInput.value

    if(email.length>2 && email.includes("@") && email.includes('.') ){
        errorDiv1.innerText = "All Good to go"
        errorDiv1.style.color = "green"
    }
    else{
        errorDiv1.innerText = "Make sure email has more than 3 characters and has @ and a ."
        errorDiv1.style.color = "red"
    }

};


function validate2(){

    let email= emailInput.value
    let password= passwordInput.value


    if(password.length < 8){

        errorDiv.innerText = "Make sure email has more than 3 characters and has @ and a ."
        errorDiv.style.color = "red";
    }
    else{

        errorDiv2.innerText = "All Good to go"
            errorDiv2.style.color = "green ";
    }
};

function finalScreen(){
    if(confirm("Do you want to go further?")==true)
    {
        alert("Successful Signup!")
    }
    else{
       document.getElementById('myForm').reset();
    }
};