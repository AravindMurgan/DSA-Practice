

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//showError//



function showError(input, message) {
	const formDiv = input.parentElement;
	formDiv.className = 'form-div error';
	const small = formDiv.querySelector('small');
	small.innerText = message;
}

///showSuccess
function showSuccess(input) {
	const formDiv = input.parentElement;
	formDiv.className = 'form-div success';
}

///valid Email
function checkEmail(input) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,`${getFieldName(input)} is not valid`)
    }
}

//getFieldName
function getFieldName(input){
    return input.id[0].toUpperCase() + input.id.slice(1)
}


///checkRequired///
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

///checkLength
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} should be atleast 3 characters`);
    }else if(input.value.length >max){
        showError(input,`${getFieldName(input)} should be below 15 characters`);
    }else{
        showSuccess(input)
    }
}

//checkPassword
function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Password doesnt match`);
    }else{
        showSuccess(input2)
    }
}

///Event Listeners///
form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log('submited');
	checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,3,15);
    checkEmail(email);
    checkPassword(password,password2);
});
