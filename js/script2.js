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
   CLEAR MESSAGES
===================================================== */

function clearMessages() {

    successMessage.style.display = "none";
    successMessage.textContent = "";

    errorMessage.style.display = "none";
    errorMessage.textContent = "";
}


/* =====================================================
   SHOW SUCCESS MESSAGE
===================================================== */

function showSuccess(text) {

    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    successMessage.textContent = text;
    successMessage.style.display = "block";
}


/* =====================================================
   SHOW ERROR MESSAGE
===================================================== */

function showError(text) {

    successMessage.style.display = "none";
    successMessage.textContent = "";

    errorMessage.textContent = text;
    errorMessage.style.display = "block";
}


/* =====================================================
   SHOW LOGIN
===================================================== */

function showLogin() {

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    formTitle.textContent = "Welcome Back 👋";

    formSubtitle.textContent =
        "Login to continue to SafeRent";

    clearMessages();
}


/* =====================================================
   SHOW REGISTER
===================================================== */

function showRegister() {

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    formTitle.textContent = "Create Account ✨";

    formSubtitle.textContent =
        "Register to start using SafeRent";

    clearMessages();
}


/* =====================================================
   LOGIN TAB
===================================================== */

loginTab.addEventListener("click", function () {

    showLogin();

});


/* =====================================================
   REGISTER TAB
===================================================== */

registerTab.addEventListener("click", function () {

    showRegister();

});


/* =====================================================
   BOTTOM REGISTER
===================================================== */

bottomRegister.addEventListener("click", function (event) {

    event.preventDefault();

    showRegister();

});


/* =====================================================
   BOTTOM LOGIN
===================================================== */

bottomLogin.addEventListener("click", function (event) {

    event.preventDefault();

    showLogin();

});


/* =====================================================
   NAVBAR LOGIN
===================================================== */

navbarLogin.addEventListener("click", function (event) {

    event.preventDefault();

    showLogin();

});


/* =====================================================
   LOGIN FORM
===================================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    /* EMPTY FIELD */

    if (email === "" || password === "") {

        showError(
            "Please enter email and password."
        );

        return;
    }


    /* EMAIL VALIDATION */

    if (!email.includes("@")) {

        showError(
            "Please enter a valid email address."
        );

        return;
    }


    /* PASSWORD VALIDATION */

    if (password.length < 6) {

        showError(
            "Password must contain at least 6 characters."
        );

        return;
    }


    /* LOGIN SUCCESS */

    showSuccess(
        "Login successful! Welcome to SafeRent."
    );

});


/* =====================================================
   REGISTER FORM
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


    /* NAME VALIDATION */

    if (name === "") {

        showError(
            "Please enter your full name."
        );

        return;
    }


    /* EMAIL VALIDATION */

    if (email === "") {

        showError(
            "Please enter your email address."
        );

        return;
    }


    if (!email.includes("@")) {

        showError(
            "Please enter a valid email address."
        );

        return;
    }


    /* PASSWORD VALIDATION */

    if (password === "") {

        showError(
            "Please enter a password."
        );

        return;
    }


    if (password.length < 6) {

        showError(
            "Password must contain at least 6 characters."
        );

        return;
    }


    /* CONFIRM PASSWORD */

    if (confirmPassword === "") {

        showError(
            "Please confirm your password."
        );

        return;
    }


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