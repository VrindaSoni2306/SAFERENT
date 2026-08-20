console.log("Properties page loaded");

const searchBox = document.querySelector("#searchBox");
const cards = document.querySelectorAll(".property-card");

searchBox.addEventListener("input", function () {

    const search = searchBox.value.toLowerCase();

    cards.forEach(function (card) {

        const text = card.innerText.toLowerCase();

        card.style.display =
            text.includes(search) ? "block" : "none";

    });

});