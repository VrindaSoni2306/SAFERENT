function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        alert("You have been logged out.");

        window.location.href = "login.html";
    }
}


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


    if (
        name == "" ||
        location == "" ||
        rent == "" ||
        rooms == ""
    ) {

        alert("Please fill all required fields.");

        return;
    }


    alert(
        "Property added successfully!\n\n" +
        "Property: " + name +
        "\nLocation: " + location
    );


    document.querySelector("form").reset();
}