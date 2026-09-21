// ========================================
// LOGIN PROTECTION
// ========================================

if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login-register.html";
}


// ========================================
// SHOW LOGGED IN OWNER
// ========================================

var currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

if (currentUser != null) {

    document.getElementById("ownerName").innerHTML =
        currentUser.name;

    document.getElementById("ownerInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();
}


// ========================================
// LOGOUT
// ========================================

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


// ========================================
// ADD PROPERTY
// ========================================

function addProperty(event) {

    event.preventDefault();

    var name =
        document.getElementById("propertyName").value;

    var location =
        document.getElementById("location").value;

    var rent =
        document.getElementById("rent").value;

    var rooms =
        document.getElementById("rooms").value;

    var type =
        document.getElementById("type").value;

    var description =
        document.getElementById("description").value;


    if (
        name == "" ||
        location == "" ||
        rent == "" ||
        rooms == ""
    ) {

        alert("Please fill all required fields.");

        return;
    }


    // Get existing properties

    var properties =
        JSON.parse(localStorage.getItem("properties")) || [];


    // Create new property

    var property = {

        id: new Date().getTime(),

        name: name,

        location: location,

        rent: rent,

        rooms: rooms,

        type: type,

        description: description,

        ownerName: currentUser.name,

        ownerEmail: currentUser.email
    };


    // Add property to array

    properties.push(property);


    // Save properties

    localStorage.setItem(
        "properties",
        JSON.stringify(properties)
    );


    alert(
        "Property added successfully!\n\n" +
        "Property: " + name +
        "\nLocation: " + location
    );


    document.getElementById("propertyName").value = "";
    document.getElementById("location").value = "";
    document.getElementById("rent").value = "";
    document.getElementById("rooms").value = "";
    document.getElementById("description").value = "";
}