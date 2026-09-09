const properties = {

    1: {
        title: "Modern 2 BHK Apartment",
        location: "Gurgaon, Haryana",
        type: "Apartment",
        price: "₹25,000",
        beds: "2 Beds",
        baths: "2 Baths",
        area: "1200 sq.ft",
        safety: "9.2/10",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80"
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
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80"
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
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
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
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
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
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900&q=80"
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
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80"
    }

};


// GET ID FROM URL

const url = window.location.search;

const propertyId = url.split("=")[1] || "1";

const property = properties[propertyId];


// DISPLAY PROPERTY

if (property) {

    document.getElementById("propertyImage").src = property.image;

    document.getElementById("propertyTitle").textContent = property.title;

    document.getElementById("propertyLocation").textContent =
        "📍 " + property.location;

    document.getElementById("propertyType").textContent = property.type;

    document.getElementById("propertyPrice").textContent = property.price;

    document.getElementById("propertyBeds").textContent = property.beds;

    document.getElementById("propertyBaths").textContent = property.baths;

    document.getElementById("propertyArea").textContent = property.area;

    document.getElementById("propertySafety").textContent = property.safety;

}


// CONTACT OWNER

const contactOwnerBtn =
    document.getElementById("contactOwnerBtn");

contactOwnerBtn.addEventListener("click", function () {

    alert("Contact request sent for " + property.title);

});