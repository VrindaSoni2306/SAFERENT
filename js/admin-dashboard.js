// ========================================
// LOGIN PROTECTION
// ========================================

if (localStorage.getItem("isLoggedIn") !== "true") {

    window.location.href = "login-register.html";
}


// ========================================
// CURRENT USER
// ========================================

var currentUser =
    JSON.parse(localStorage.getItem("currentUser"));


// Only Admin can open Admin Dashboard

if (currentUser == null || currentUser.role != "Admin") {

    alert("Only Admin can access this page.");

    window.location.href = "login-register.html";
}


// ========================================
// LOAD USERS
// ========================================

function loadUsers() {

    var users =
        JSON.parse(localStorage.getItem("users")) || [];

    var table =
        document.getElementById("userTable");

    table.innerHTML = "";


    for (var i = 0; i < users.length; i++) {

        var status = users[i].status || "Active";

        table.innerHTML +=
            "<tr>" +

            "<td>" + users[i].name + "</td>" +

            "<td>" + users[i].email + "</td>" +

            "<td>" + users[i].role + "</td>" +

            "<td>" + status + "</td>" +

            "<td>" +
            "<button onclick='blockUser(" + i + ")'>" +
            "Block" +
            "</button>" +
            "</td>" +

            "</tr>";
    }
}


// ========================================
// BLOCK USER
// ========================================

function blockUser(index) {

    var users =
        JSON.parse(localStorage.getItem("users")) || [];


    users[index].status = "Blocked";


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    alert("User blocked successfully!");


    loadUsers();
}


// ========================================
// LOAD PROPERTIES
// ========================================

function loadProperties() {

    var properties =
        JSON.parse(localStorage.getItem("properties")) || [];

    var table =
        document.getElementById("propertyTable");

    table.innerHTML = "";


    for (var i = 0; i < properties.length; i++) {

        var status =
            properties[i].status || "Pending";


        table.innerHTML +=
            "<tr>" +

            "<td>" + properties[i].name + "</td>" +

            "<td>" + properties[i].ownerName + "</td>" +

            "<td>" + properties[i].location + "</td>" +

            "<td>₹" + properties[i].rent + "</td>" +

            "<td>" + status + "</td>" +

            "<td>" +

            "<button onclick='approveProperty(" + i + ")'>" +
            "Approve" +
            "</button> " +

            "<button onclick='rejectProperty(" + i + ")'>" +
            "Reject" +
            "</button>" +

            "</td>" +

            "</tr>";
    }
}


// ========================================
// APPROVE PROPERTY
// ========================================

function approveProperty(index) {

    var properties =
        JSON.parse(localStorage.getItem("properties")) || [];


    properties[index].status = "Approved";


    localStorage.setItem(
        "properties",
        JSON.stringify(properties)
    );


    alert("Property approved successfully!");


    loadProperties();
}


// ========================================
// REJECT PROPERTY
// ========================================

function rejectProperty(index) {

    var properties =
        JSON.parse(localStorage.getItem("properties")) || [];


    properties[index].status = "Rejected";


    localStorage.setItem(
        "properties",
        JSON.stringify(properties)
    );


    alert("Property rejected successfully!");


    loadProperties();
}


// ========================================
// RESOLVE COMPLAINT
// ========================================

function resolveComplaint() {

    alert("Complaint resolved successfully!");
}


// ========================================
// LOGOUT
// ========================================

function logout() {

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("currentUser");

    window.location.href = "login-register.html";
}


// ========================================
// LOAD DASHBOARD
// ========================================

loadUsers();

loadProperties(); 