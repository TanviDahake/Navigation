document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var menuItems = navbar.querySelectorAll("li");

    // Add event listeners to each menu item
    menuItems.forEach(function(item) {
        var menuItemLink = item.querySelector("a");

        item.addEventListener("mouseover", function() {
            menuItemLink.classList.add("hovered"); // Add a class on hover
        });

        item.addEventListener("mouseout", function() {
            menuItemLink.classList.remove("hovered"); // Remove the class on mouse out
        });
    });

    // Change navbar background on scroll
    window.onscroll = function() {
        if (window.pageYOffset > 50) {
            navbar.style.backgroundColor = "#45a049";
        } else {
            navbar.style.backgroundColor = "#4CAF50";
        }
    };
});
