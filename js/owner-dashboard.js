
// ========================================
// SHOW LOGGED IN OWNER NAME
// ========================================

var currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

if (currentUser != null) {

    document.getElementById("ownerName").innerHTML =
        currentUser.name;

    document.getElementById("ownerWelcome").innerHTML =
        currentUser.name;

    document.getElementById("ownerInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();
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


function searchProperty() {

    var search =
        document.getElementById("searchInput").value;

    if (search == "") {

        alert("Please enter a property name.");

    } else {

        alert(
            "Searching for: " + search
        );
    }
}