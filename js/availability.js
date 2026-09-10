function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        alert("You have been logged out.");

        window.location.href = "login.html";
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