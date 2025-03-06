document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menubutton").addEventListener("click", function() {
        let navbar = document.getElementById("navbar");
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "block"; // Show navbar
        } else {
            navbar.style.display = "none"; // Hide navbar
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menubutton").addEventListener("click", function() {
        let navbarbg = document.getElementById("navbarbg");
        if (navbarbg.style.display === "none" || navbarbg.style.display === "") {
            navbarbg.style.display = "block"; // Show navbarbg
        } else {
            navbarbg.style.display = "none"; // Hide navbarbg
        }
    });
});