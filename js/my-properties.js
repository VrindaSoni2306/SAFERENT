function logout() {

    var result = confirm(
        "Are you sure you want to logout?"
    );

    if (result == true) {

        alert("You have been logged out.");

        window.location.href = "login.html";
    }
}


function editProperty() {

    alert(
        "Property editing option will open here."
    );
}


function deleteProperty() {

    var result = confirm(
        "Are you sure you want to delete this property?"
    );

    if (result == true) {

        alert(
            "Property deleted successfully."
        );
    }
}


function searchProperty() {

    var search =
        document.getElementById("searchInput").value;

    if (search == "") {

        alert("Please enter a property name.");

    } else {

        alert("Searching for: " + search);
    }
}