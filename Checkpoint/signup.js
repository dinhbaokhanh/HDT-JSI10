const signUp = document.getElementById("sign-up");
signUp.addEventListener("submit", (event) => {
    event.preventDefault();

    const data_signup = {
        firstName: signUp.fName.value,
        lastName: signUp.lName.value,
        email: signUp.email.value,
        password: signUp.password.value,
        confirmPassword: signUp.confirmPassword.value,
    }

    console.log(data_signup);

    controller.register(data)

    const register = async (data) => {
        try {
          await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
          firebase.auth().currentUser.sendEmailVerification();
          alert("The email has been registered, please check your email");
        }
        catch (err) {
          console.log(err);
          alert(err.message);
        }
    }

    register(data_signup);

    signUp.fName.value = "";
    signUp.lName.value = "";
    signUp.email.value = "";
    signUp.password.value = "";
    signUp.confirmPassword.value = "";

    location.href = './login.html'

})