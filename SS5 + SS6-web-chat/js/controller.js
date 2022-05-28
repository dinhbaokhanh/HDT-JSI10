const controller = {}

controller.register = (data) => {
    if(data.firstName.trim() === ""){
        document.getElementById('first-name-error').innerText = "*Please input first name";
    }
    if(data.lastName.trim() === ""){
        document.getElementById('last-name-error').innerText = "*Please input last name";
    }
    if(data.email.trim() === ""){
        document.getElementById('email-error').innerText = "*Please input email";
    }
    if(data.password.trim() === ""){
        document.getElementById('password-error').innerText = "*Please input password";
    }
    
    
}


controller.login = (data) => {
    if(data.email.trim() === ""){
        document.getElementById('email-error').innerText = "*Please input email";
    }
    if(data.password.trim() === ""){
        document.getElementById('password-error').innerText = "*Please input password";
    }
    
}