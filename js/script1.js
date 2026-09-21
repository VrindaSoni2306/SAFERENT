// ========================================
// LOGIN PROTECTION
// ========================================

if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login-register.html";
}

// ========================================
// SHOW LOGGED IN USER NAME
// ========================================

var currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

if (currentUser != null) {

    document.getElementById("userName").innerHTML =
        currentUser.name;

    document.getElementById("welcomeUser").innerHTML =
        currentUser.name;

    document.getElementById("userInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();
}

// ========================================
// SHOW USER PROFILE DETAILS
// ========================================

if (currentUser != null) {

    document.getElementById("profileName").innerHTML =
        currentUser.name;

    document.getElementById("fullProfileName").innerHTML =
        currentUser.name;

    document.getElementById("profileInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();

    document.getElementById("largeProfileInitial").innerHTML =
        currentUser.name.charAt(0).toUpperCase();

    document.getElementById("profileFullName").value =
        currentUser.name;

    document.getElementById("profileEmail").value =
        currentUser.email;

    document.getElementById("accountType").innerHTML =
        currentUser.role;
}

// ========================================
// FAVORITES
// ========================================

let favoriteCount = 3;


// ========================================
// REMOVE FAVORITE 1
// ========================================

function removeFavorite1() {

    document.getElementById("card1").style.display = "none";

    favoriteCount--;

    document.getElementById("favoriteCount").innerHTML = favoriteCount;

}


// ========================================
// REMOVE FAVORITE 2
// ========================================

function removeFavorite2() {

    document.getElementById("card2").style.display = "none";

    favoriteCount--;

    document.getElementById("favoriteCount").innerHTML = favoriteCount;

}


// ========================================
// REMOVE FAVORITE 3
// ========================================

function removeFavorite3() {

    document.getElementById("card3").style.display = "none";

    favoriteCount--;

    document.getElementById("favoriteCount").innerHTML = favoriteCount;

}

// ========================================
// LOGOUT
// ========================================

function logout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "login-register.html";

}