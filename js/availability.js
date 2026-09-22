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


function updateAvailability() {

    var rooms =
        prompt("Enter available rooms:");

    if (
        rooms != null &&
        rooms != ""
    ) {

        alert(
            "Availability updated successfully!\n" +
            "Available rooms: " + rooms
        );
    }
}