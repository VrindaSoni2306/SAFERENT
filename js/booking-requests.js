function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        alert("You have been logged out.");

        window.location.href = "login.html";
    }
}


function acceptBooking(button) {

    alert(
        "Booking request accepted successfully!"
    );

    var parent =
        button.parentElement.parentElement;

    var status =
        parent.querySelector(".status");

    status.innerText = "Confirmed";

    status.className = "status confirmed";

    button.parentElement.remove();
}


function rejectBooking(button) {

    var result = confirm(
        "Are you sure you want to reject this booking?"
    );

    if (result == true) {

        var parent =
            button.parentElement.parentElement;

        parent.remove();

        alert("Booking request rejected.");
    }
}