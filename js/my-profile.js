// ========================================
// SHOW LOGGED IN OWNER DETAILS
// ========================================

var currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

if (currentUser != null) {

    document.getElementById("ownerProfileName").innerHTML =
        currentUser.name;

    document.getElementById("ownerFullName").innerHTML =
        currentUser.name;

    document.getElementById("ownerProfileInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();

    document.getElementById("ownerBigInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();

    document.getElementById("ownerNameDetail").innerHTML =
        currentUser.name;

    document.getElementById("ownerEmailDetail").innerHTML =
        currentUser.email;
}


function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");

        alert("You have been logged out.");

        window.location.href = "login-register.html";
    }
}


function editProfile() {

    alert(
        "Profile editing option will open here."
    );
}