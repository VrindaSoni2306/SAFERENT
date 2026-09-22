// Login Protection
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login-register.html";
}


// Block User
function blockUser(button) {

    let row = button.parentElement.parentElement;
    let status = row.cells[2];

    status.innerHTML = "Blocked";
    button.innerHTML = "Blocked";
    button.disabled = true;

    alert("User blocked successfully!");
}


// Approve Property
function approveProperty(button) {

    let row = button.parentElement.parentElement;
    let status = row.cells[2];

    status.innerHTML = "Approved";
    button.innerHTML = "Approved";
    button.disabled = true;

    alert("Property approved successfully!");
}


// Remove Property
function removeProperty(button) {

    let row = button.parentElement.parentElement;
    let status = row.cells[2];

    status.innerHTML = "Removed";
    button.innerHTML = "Removed";
    button.disabled = true;

    alert("Property removed successfully!");
}


// Resolve Complaint
function resolveComplaint(button) {

    let row = button.parentElement.parentElement;
    let status = row.cells[2];

    status.innerHTML = "Resolved";
    button.innerHTML = "Resolved";
    button.disabled = true;

    alert("Complaint resolved successfully!");
}


// Logout
function logout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "login-register.html";
}