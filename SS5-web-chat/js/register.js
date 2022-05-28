const init = () => {

    const registerForm = document.getElementById('register-form')

    registerForm.addEventListener("submit", function(event){
        event.preventDefault();

        const data = {
            firstName: registerForm.firstName.value,
            lastName: registerForm.lastName.value,
            email: registerForm.email.value,
            password: registerForm.password.value,
            confirmPassword: registerForm.confirmPassword.value,
        }



        controller.register(data);
    })

}

