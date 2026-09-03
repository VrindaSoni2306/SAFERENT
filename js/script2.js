/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const loginTab = document.getElementById("loginTab");

const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");

const formTitle = document.getElementById("formTitle");

const formSubtitle = document.getElementById("formSubtitle");

const successMessage = document.getElementById("successMessage");

const errorMessage = document.getElementById("errorMessage");

const bottomRegister = document.getElementById("bottomRegister");

const bottomLogin = document.getElementById("bottomLogin");

const forgotPassword = document.getElementById("forgotPassword");

const navbarLogin = document.getElementById("navbarLogin");


/* =====================================================
   SHOW LOGIN FORM
===================================================== */

function showLogin() {

    loginForm.classList.remove("hidden");

    registerForm.classList.add("hidden");

    loginTab.classList.add("active");

    registerTab.classList.remove("active");

    formTitle.innerHTML = "Welcome Back 👋";

    formSubtitle.innerHTML =
        "Login to continue to SafeRent";

    clearMessages();

}


/* =====================================================
   SHOW REGISTER FORM
===================================================== */

function showRegister() {

    loginForm.classList.add("hidden");

    registerForm.classList.remove("hidden");

    registerTab.classList.add("active");

    loginTab.classList.remove("active");

    formTitle.innerHTML = "Create Account ✨";

    formSubtitle.innerHTML =
        "Register to start using SafeRent";

    clearMessages();

}


/* =====================================================
   CLEAR SUCCESS / ERROR MESSAGES
===================================================== */

function clearMessages() {

    successMessage.style.display = "none";

    successMessage.innerHTML = "";

    errorMessage.style.display = "none";

    errorMessage.innerHTML = "";

}


/* =====================================================
   SHOW SUCCESS MESSAGE
===================================================== */

function showSuccess(message) {

    errorMessage.style.display = "none";

    errorMessage.innerHTML = "";

    successMessage.innerHTML = message;

    successMessage.style.display = "block";

}


/* =====================================================
   SHOW ERROR MESSAGE
===================================================== */

function showError(message) {

    successMessage.style.display = "none";

    successMessage.innerHTML = "";

    errorMessage.innerHTML = message;

    errorMessage.style.display = "block";

}


/* =====================================================
   LOGIN TAB CLICK
===================================================== */

loginTab.addEventListener("click", function () {

    showLogin();

});


/* =====================================================
   REGISTER TAB CLICK
===================================================== */

registerTab.addEventListener("click", function () {

    showRegister();

});


/* =====================================================
   BOTTOM REGISTER CLICK
===================================================== */

bottomRegister.addEventListener("click", function (event) {

    event.preventDefault();

    showRegister();

});


/* =====================================================
   BOTTOM LOGIN CLICK
===================================================== */

bottomLogin.addEventListener("click", function (event) {

    event.preventDefault();

    showLogin();

});


/* =====================================================
   NAVBAR LOGIN CLICK
===================================================== */

navbarLogin.addEventListener("click", function (event) {

    event.preventDefault();

    showLogin();

});


/* =====================================================
   LOGIN FORM SUBMIT
===================================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();


    /* EMPTY FIELD CHECK */

    if (email === "" || password === "") {

        showError("Please enter email and password.");

        return;

    }


    /* EMAIL CHECK */

    if (!email.includes("@")) {

        showError("Please enter a valid email address.");

        return;

    }


    /* SUCCESS */

    showSuccess(
        "Login successful! Welcome to SafeRent."
    );


    /* CLEAR PASSWORD */

    document.getElementById("loginPassword").value = "";

});


/* =====================================================
   REGISTER FORM SUBMIT
===================================================== */

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;


    /* NAME CHECK */

    if (name === "") {

        showError("Please enter your full name.");

        return;

    }


    /* EMAIL CHECK */

    if (email === "" || !email.includes("@")) {

        showError("Please enter a valid email address.");

        return;

    }


    /* PASSWORD LENGTH */

    if (password.length < 6) {

        showError(
            "Password must contain at least 6 characters."
        );

        return;

    }


    /* CONFIRM PASSWORD */

    if (password !== confirmPassword) {

        showError(
            "Password and Confirm Password do not match."
        );

        return;

    }


    /* TERMS */

    if (!terms) {

        showError(
            "Please agree to the Terms & Conditions."
        );

        return;

    }


    /* REGISTRATION SUCCESS */

    showSuccess(
        "Registration successful! Welcome to SafeRent."
    );


    /* CLEAR FORM */

    registerForm.reset();


});


/* =====================================================
   FORGOT PASSWORD
===================================================== */

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value.trim();


    if (email === "") {

        showError(
            "Please enter your email first."
        );

        return;

    }


    if (!email.includes("@")) {

        showError(
            "Please enter a valid email address."
        );

        return;

    }


    showSuccess(
        "Password reset instructions have been sent to your email."
    );

});