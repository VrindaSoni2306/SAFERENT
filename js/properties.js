// ========================================
// PROPERTY SEARCH
// ========================================

const searchInput = document.getElementById("propertySearch");

const searchBtn = document.getElementById("searchBtn");

const propertyCards =
    document.querySelectorAll(".property-card");

const noResults =
    document.getElementById("noResults");


// ========================================
// SEARCH FUNCTION
// ========================================

function searchProperties() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let found = false;


    propertyCards.forEach(function (card) {

        const cardText =
            card.textContent.toLowerCase();


        if (cardText.includes(searchValue)) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    // ========================================
    // NO RESULTS MESSAGE
    // ========================================

    if (found) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }

}


// ========================================
// SEARCH BUTTON
// ========================================

searchBtn.addEventListener("click", function () {

    searchProperties();

});


// ========================================
// ENTER KEY SEARCH
// ========================================

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchProperties();

    }

});