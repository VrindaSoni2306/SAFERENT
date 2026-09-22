// ========================================
// DEFAULT PROPERTIES
// ========================================

var defaultProperties = {
    1: {
        title: "Modern 2 BHK Apartment",
        location: "Gurgaon, Haryana",
        type: "Apartment",
        price: "₹25,000",
        beds: "2 Beds",
        baths: "2 Baths",
        area: "1200 sq.ft",
        safety: "9.2/10",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
        ownerName: "Owner 1",
        ownerEmail: "owner1@test.com",
        description: "A modern and comfortable property located in a well-connected area. The property is suitable for families and working professionals and offers a safe and peaceful living environment."
    },

    2: {
        title: "Luxury 3 BHK Apartment",
        location: "Noida, Uttar Pradesh",
        type: "Apartment",
        price: "₹32,000",
        beds: "3 Beds",
        baths: "2 Baths",
        area: "1650 sq.ft",
        safety: "8.8/10",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
        ownerName: "Owner 2",
        ownerEmail: "owner2@test.com",
        description: "A spacious luxury apartment with modern facilities and a comfortable living environment."
    },

    3: {
        title: "Spacious Family House",
        location: "Delhi, India",
        type: "House",
        price: "₹40,000",
        beds: "3 Beds",
        baths: "3 Baths",
        area: "2000 sq.ft",
        safety: "9.5/10",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
        ownerName: "Owner 3",
        ownerEmail: "owner3@test.com",
        description: "A spacious family house located in a convenient and peaceful area."
    },

    4: {
        title: "Premium 2 BHK Apartment",
        location: "Chandigarh, India",
        type: "Apartment",
        price: "₹22,000",
        beds: "2 Beds",
        baths: "2 Baths",
        area: "1100 sq.ft",
        safety: "9.3/10",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
        ownerName: "Owner 4",
        ownerEmail: "owner4@test.com",
        description: "A premium apartment offering comfortable living with good connectivity."
    },

    5: {
        title: "Modern 1 BHK Apartment",
        location: "Mohali, Punjab",
        type: "Apartment",
        price: "₹16,000",
        beds: "1 Bed",
        baths: "1 Bath",
        area: "750 sq.ft",
        safety: "9.0/10",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900&q=80",
        ownerName: "Owner 5",
        ownerEmail: "owner5@test.com",
        description: "A modern 1 BHK apartment suitable for students and working professionals."
    },

    6: {
        title: "Spacious 3 BHK House",
        location: "Panchkula, Haryana",
        type: "House",
        price: "₹28,000",
        beds: "3 Beds",
        baths: "3 Baths",
        area: "1800 sq.ft",
        safety: "9.4/10",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
        ownerName: "Owner 6",
        ownerEmail: "owner6@test.com",
        description: "A spacious 3 BHK house located in a peaceful and well-connected area."
    }
};


// ========================================
// GET PROPERTY ID FROM URL
// ========================================

var url = window.location.search;

var propertyId = url.split("=")[1] || "1";


// ========================================
// FIND PROPERTY
// ========================================

var property = defaultProperties[propertyId];


// If property is not one of the default properties,
// search for it in localStorage.

if (!property) {

    var addedProperties =
        JSON.parse(localStorage.getItem("properties")) || [];

    for (var i = 0; i < addedProperties.length; i++) {

        if (
            String(addedProperties[i].id) ===
            String(propertyId)
        ) {

            var addedProperty = addedProperties[i];

            property = {

                title: addedProperty.name,

                location: addedProperty.location,

                type: addedProperty.type,

                price: "₹" + addedProperty.rent,

                beds: addedProperty.rooms + " Rooms",

                baths: "Not specified",

                area: "Not specified",

                safety: "Not available",

                // Use the image entered by the owner
                image:
                    addedProperty.image ||
                    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",

                ownerName:
                    addedProperty.ownerName ||
                    "Property Owner",

                ownerEmail:
                    addedProperty.ownerEmail ||
                    "owner@test.com",

                description:
                    addedProperty.description ||
                    "No description available."
            };

            break;
        }
    }
}


// ========================================
// DISPLAY PROPERTY DETAILS
// ========================================

if (property) {

    document.getElementById("propertyImage").src =
        property.image;

    document.getElementById("propertyTitle").textContent =
        property.title;

    document.getElementById("propertyLocation").textContent =
        "📍 " + property.location;

    document.getElementById("propertyType").textContent =
        property.type;

    document.getElementById("propertyPrice").textContent =
        property.price;

    document.getElementById("propertyBeds").textContent =
        property.beds;

    document.getElementById("propertyBaths").textContent =
        property.baths;

    document.getElementById("propertyArea").textContent =
        property.area;

    document.getElementById("propertySafety").textContent =
        property.safety;


    // ========================================
    // UPDATE PROPERTY DESCRIPTION
    // ========================================

    var descriptionElement =
        document.getElementById("propertyDescription");

    if (descriptionElement) {

        descriptionElement.textContent =
            property.description;
    }
}


// ========================================
// CONTACT OWNER
// ========================================

var contactOwnerBtn =
    document.getElementById("contactOwnerBtn");

contactOwnerBtn.addEventListener("click", function () {

    if (!property) {

        alert("Property not found.");

        return;
    }

    alert(
        "Contact request sent for " +
        property.title +
        "\nOwner: " +
        property.ownerName
    );
});