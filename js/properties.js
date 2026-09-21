// ========================================
// DEFAULT PROPERTIES
// ========================================

var defaultProperties = [

    {
        id: 1,
        name: "Modern 2 BHK Apartment",
        location: "Gurgaon, Haryana",
        rent: "25000",
        rooms: "2",
        type: "Apartment",
        beds: "2 Beds",
        baths: "2 Baths",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    },

    {
        id: 2,
        name: "Luxury 3 BHK Apartment",
        location: "Noida, Uttar Pradesh",
        rent: "32000",
        rooms: "3",
        type: "Apartment",
        beds: "3 Beds",
        baths: "2 Baths",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
    },

    {
        id: 3,
        name: "Spacious Family House",
        location: "Delhi, India",
        rent: "40000",
        rooms: "3",
        type: "House",
        beds: "3 Beds",
        baths: "3 Baths",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    },

    {
        id: 4,
        name: "Premium 2 BHK Apartment",
        location: "Chandigarh, India",
        rent: "22000",
        rooms: "2",
        type: "Apartment",
        beds: "2 Beds",
        baths: "2 Baths",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },

    {
        id: 5,
        name: "Modern 1 BHK Apartment",
        location: "Mohali, Punjab",
        rent: "16000",
        rooms: "1",
        type: "Apartment",
        beds: "1 Bed",
        baths: "1 Bath",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80"
    },

    {
        id: 6,
        name: "Spacious 3 BHK House",
        location: "Panchkula, Haryana",
        rent: "28000",
        rooms: "3",
        type: "House",
        beds: "3 Beds",
        baths: "3 Baths",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
    }

];


// ========================================
// LOAD ALL PROPERTIES
// ========================================

function loadProperties() {

    var container =
        document.getElementById("propertiesContainer");

    var noResults =
        document.getElementById("noResults");


    // Get owner-added properties

    var addedProperties =
        JSON.parse(localStorage.getItem("properties")) || [];


    // Start with default properties

    var allProperties = [];


    for (var i = 0; i < defaultProperties.length; i++) {

        allProperties.push(defaultProperties[i]);

    }


    // Add owner properties

    for (var j = 0; j < addedProperties.length; j++) {

        allProperties.push(addedProperties[j]);

    }


    // Clear old content

    container.innerHTML = "";


    // If no properties

    if (allProperties.length == 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    // Display all properties

    for (var k = 0; k < allProperties.length; k++) {

        var property =
            allProperties[k];


        var image =
            property.image ||
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80";


        var beds =
            property.beds ||
            property.rooms + " Rooms";


        var baths =
            property.baths ||
            "Shared";


        container.innerHTML +=

            "<div class='property-card'>" +

                "<img src='" +
                    image +
                    "' alt='" +
                    property.name +
                    "'>" +

                "<div class='property-content'>" +

                    "<div class='property-top'>" +

                        "<span class='property-type'>" +
                            property.type +
                        "</span>" +

                        "<span class='verified'>" +
                            "✓ Verified" +
                        "</span>" +

                    "</div>" +

                    "<h2>" +
                        property.name +
                    "</h2>" +

                    "<p class='location'>" +
                        "📍 " +
                        property.location +
                    "</p>" +

                    "<div class='property-info'>" +

                        "<span>" +
                            "🛏 " +
                            beds +
                        "</span>" +

                        "<span>" +
                            "🚿 " +
                            baths +
                        "</span>" +

                    "</div>" +

                    "<h3>" +
                        "₹" +
                        property.rent +
                        " / month" +
                    "</h3>" +

                    "<button " +
                        "onclick='viewProperty(" +
                        property.id +
                        ")'>" +

                        "View Details" +

                    "</button>" +

                "</div>" +

            "</div>";

    }

}


// ========================================
// SEARCH PROPERTIES
// ========================================

function searchProperties() {

    var search =
        document.getElementById("propertySearch").value.toLowerCase().trim();

    var container =
        document.getElementById("propertiesContainer");

    var noResults =
        document.getElementById("noResults");

    var cards =
        container.getElementsByClassName("property-card");

    var found = false;


    for (var i = 0; i < cards.length; i++) {

        var cardText =
            cards[i].textContent.toLowerCase();


        if (search == "") {

            cards[i].style.display = "block";

            found = true;

        }
        else if (cardText.includes(search)) {

            cards[i].style.display = "block";

            found = true;

        }
        else {

            cards[i].style.display = "none";

        }

    }


    if (found) {

        noResults.style.display = "none";

    }
    else {

        noResults.style.display = "block";

    }

}

// ========================================
// VIEW PROPERTY
// ========================================

function viewProperty(propertyId) {

    window.location.href =
        "property-details.html?id=" +
        propertyId;

}


// ========================================
// LOAD WHEN PAGE OPENS
// ========================================

loadProperties();