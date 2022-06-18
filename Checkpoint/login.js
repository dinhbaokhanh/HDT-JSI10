const log_in = document.getElementById("log-in")
log_in.addEventListener("submit", (event) => {
    event.preventDefault();

    const login_information = {
        email: log_in.email.value,
        password: log_in.password.value,
    }

    const login = async (dataLogin) => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
            alert("Log in successful")
        }
        catch (err) {
          console.log(err);
          alert(err.message);
        }
    }
    
    login(login_information)

})