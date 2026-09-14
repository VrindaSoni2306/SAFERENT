function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        localStorage.removeItem("isLoggedIn");

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