const signUp = document.getElementById("sign-up");
signUp.addEventListener("submit", (event) => {
  event.preventDefault();

  let username = document.getElementById("userName").value.trim();
  let Email = document.getElementById("email").value.trim();
  let Password = document.getElementById("password").value;
  let ConfirmPassword = document.getElementById("confirmPassword").value;

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Username must be at least 6 characters");
  } else if (Password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!Password.match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter");
  } else if (!Password.match(upperCaseLetter)) {
    alert("Password must  contain a uppercase letter");
  } else if (!Password.match(numbers)) {
    alert("Password must  contain a number or special character");
  } else if (Password !== ConfirmPassword) {
    alert("Password is not confirmed correctly")
  } else {

    const data_signup = {
      userName: signUp.userName.value,
      email: signUp.email.value,
      password: signUp.password.value,
      confirmPassword: signUp.confirmPassword.value,
    }

    console.log(data_signup);

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

    signUp.userName.value = ""
    signUp.email.value = "";
    signUp.password.value = "";
    signUp.confirmPassword.value = "";

    location.href = './login.html'
  }

})
