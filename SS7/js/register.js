
const registerForm = document.getElementById("register-form");


registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // giải quyết vđề tự động reload web

    const data = {
        firstName: registerForm.firstName.value,
        lastName: registerForm.lastName.value,
        email: registerForm.email.value,
        password: registerForm.password.value,
        confirmPassword: registerForm.confirmPassword.value
    }

    console.log(data);

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

    register(data);


    registerForm.firstName.value = ""
    registerForm.lastName.value = ""
    registerForm.email.value = ""
    registerForm.password.value = ""
    registerForm.confirmPassword.value = ""

    // controller.register(data);
    // Kiểm tra lỗi người dùng type tại trang đăng ký
})

