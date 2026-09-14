function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");

        window.location.href = "login-register.html";
    }
}


function loadBookings() {

    var currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    var bookingList =
        document.getElementById("bookingList");

    var emptyBookings =
        document.getElementById("emptyBookings");

    if (currentUser === null || currentUser.role !== "Owner") {

        bookingList.innerHTML = "<p>Please login as an Owner to view booking requests.</p>";

        return;
    }

    var bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    var ownerBookings = [];

    for (var i = 0; i < bookings.length; i++) {

        if (bookings[i].ownerEmail === currentUser.email) {

            ownerBookings.push(bookings[i]);
        }
    }

    if (ownerBookings.length === 0) {

        emptyBookings.style.display = "block";

        return;
    }

    emptyBookings.style.display = "none";

    bookingList.innerHTML = "";

    for (var j = 0; j < ownerBookings.length; j++) {

        var booking = ownerBookings[j];

        bookingList.innerHTML +=
            "<div class='booking-item'>" +
            "<div>" +
            "<h3>" + booking.userName + "</h3>" +
            "<p>" + booking.propertyName + "</p>" +
            "<p>Move-in: " + booking.moveInDate + "</p>" +
            "<span class='status " + booking.status.toLowerCase() + "'>" +
            booking.status +
            "</span>" +
            "</div>" +
            "<div class='actions'>" +
            "<button class='accept' onclick='updateBookingStatus(" + booking.id + ", &quot;Accepted&quot;)'>Accept</button>" +
            "<button class='reject' onclick='updateBookingStatus(" + booking.id + ", &quot;Rejected&quot;)'>Reject</button>" +
            "</div>" +
            "</div>";
    }
}


function updateBookingStatus(bookingId, newStatus) {

    var bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    for (var i = 0; i < bookings.length; i++) {

        if (bookings[i].id == bookingId) {

            bookings[i].status = newStatus;
            break;
        }
    }

    localStorage.setItem("bookings", JSON.stringify(bookings));

    loadBookings();
}


loadBookings();
