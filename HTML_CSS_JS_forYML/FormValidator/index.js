const form = document.getElementById('form');
console.log(form);
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2= document.getElementById('password2');

//showError//
function showError(input,message){
    const formDiv = input.parentElement;
    formDiv.className='form-div error';
    const small = formDiv.querySelector('small');
    small.innerText= message;
}

///showSuccess
function showSuccess(input){
    const formDiv = input.parentElement;
    formDiv.className='form-div success';
}



///Event Listeners///
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('submited');
    if(username.value === ''){
        showError(username,'Please enter the username');
    }else{
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email,'Please enter the email')
    }else{
        showSuccess(email)
    }

    if(password.value === ''){
        showError(password,'Please enter the password')
    }else{
        showSuccess(password)
    }

    if(password.value !== password2.value && password2.value === ''){
        showError(password2,'Password doesnt match')
    }else{
        showSuccess(password2)
    }

})