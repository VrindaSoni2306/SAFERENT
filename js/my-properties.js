// ========================================
// LOGIN PROTECTION
// ========================================

if (localStorage.getItem("isLoggedIn") !== "true") {

    window.location.href = "login-register.html";

}


// ========================================
// GET CURRENT OWNER
// ========================================

var currentUser =
    JSON.parse(localStorage.getItem("currentUser"));


// ========================================
// SHOW OWNER NAME
// ========================================

if (currentUser != null) {

    document.getElementById("ownerName").innerHTML =
        currentUser.name;

    document.getElementById("ownerInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();

}


// ========================================
// LOAD MY PROPERTIES
// ========================================

function loadProperties() {

    var properties =
        JSON.parse(localStorage.getItem("properties")) || [];

    var propertyGrid =
        document.getElementById("propertyGrid");

    var noProperties =
        document.getElementById("noProperties");


    // Clear old properties

    propertyGrid.innerHTML = "";


    var myProperties = [];


    // Find current owner's properties

    for (var i = 0; i < properties.length; i++) {

        if (
            currentUser != null &&
            properties[i].ownerEmail == currentUser.email
        ) {

            myProperties.push(properties[i]);

        }

    }


    // If no property exists

    if (myProperties.length == 0) {

        propertyGrid.innerHTML =
            "<p id='noProperties'>No properties added yet.</p>";

        return;

    }


    // Display properties

    for (var j = 0; j < myProperties.length; j++) {

        var property =
            myProperties[j];


        propertyGrid.innerHTML +=

            "<div class='property-card'>" +

                "<div class='property-image'>" +
                    "Property" +
                "</div>" +

                "<h3>" +
                    property.name +
                "</h3>" +

                "<p>" +
                    "📍 " +
                    property.location +
                "</p>" +

                "<p>" +
                    "🛏 " +
                    property.rooms +
                    " Rooms" +
                "</p>" +

                "<h4>" +
                    "₹" +
                    property.rent +
                    " / month" +
                "</h4>" +

                "<span class='status available'>" +
                    "Available" +
                "</span>" +

                "<div class='card-buttons'>" +

                    "<button onclick='editProperty(" +
                    property.id +
                    ")'>" +
                    "Edit" +
                    "</button>" +

                    "<button onclick='deleteProperty(" +
                    property.id +
                    ")'>" +
                    "Delete" +
                    "</button>" +

                "</div>" +

            "</div>";

    }

}


// ========================================
// EDIT PROPERTY
// ========================================

function editProperty(propertyId) {

    alert(
        "Edit property feature will open here."
    );

}


// ========================================
// DELETE PROPERTY
// ========================================

function deleteProperty(propertyId) {

    var result =
        confirm(
            "Are you sure you want to delete this property?"
        );


    if (result == true) {

        var properties =
            JSON.parse(localStorage.getItem("properties")) || [];

        var newProperties = [];


        for (var i = 0; i < properties.length; i++) {

            if (properties[i].id != propertyId) {

                newProperties.push(properties[i]);

            }

        }


        localStorage.setItem(
            "properties",
            JSON.stringify(newProperties)
        );


        alert(
            "Property deleted successfully."
        );


        loadProperties();

    }

}


// ========================================
// SEARCH PROPERTY
// ========================================

function searchProperty() {

    var search =
        document.getElementById("searchInput").value.toLowerCase();


    var propertyCards =
        document.getElementsByClassName("property-card");


    for (var i = 0; i < propertyCards.length; i++) {

        var propertyName =
            propertyCards[i]
            .getElementsByTagName("h3")[0]
            .innerHTML
            .toLowerCase();


        if (propertyName.includes(search)) {

            propertyCards[i].style.display =
                "block";

        } else {

            propertyCards[i].style.display =
                "none";

        }

    }

}


// ========================================
// LOGOUT
// ========================================

function logout() {

    var result =
        confirm(
            "Are you sure you want to logout?"
        );


    if (result == true) {

        localStorage.removeItem("isLoggedIn");

        localStorage.removeItem("currentUser");

        alert(
            "You have been logged out."
        );

        window.location.href =
            "login-register.html";

    }

}


// ========================================
// LOAD PROPERTIES WHEN PAGE OPENS
// ========================================

loadProperties();