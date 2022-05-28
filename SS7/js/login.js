const init = () => {

    const loginForm = document.getElementById('login-form')

    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        const data = {
            email: loginForm.email.value,
            password: loginForm.password.value,
        }


        
    })


}



window.onload = init;