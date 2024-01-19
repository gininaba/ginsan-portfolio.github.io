// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Array of roles to display
    const roles = ['Graphic Designer & IT Expert', 'An Android Expert'];
    // Elements for role and greeting
    const roleElement = document.getElementById('role');
    const hiGinsanElement = document.querySelector('.display-4');
    let roleIndex = 0;
    let text = '';

    // Function to update text in a typing animation style
    function updateText() {
        roleElement.textContent = text;

        if (text.length < roles[roleIndex].length) {
            text = roles[roleIndex].slice(0, text.length + 1);
            setTimeout(updateText, 50);
        } else {
            setTimeout(fadeOut, 1000);
        }
    }

    // Function to fade out the text
    function fadeOut() {
        let alpha = 1.0;
        const fadeOutInterval = setInterval(function () {
            if (alpha > 0) {
                alpha -= 0.05;
                roleElement.style.opacity = alpha;
            } else {
                clearInterval(fadeOutInterval);
                changeRole();
            }
        }, 50);
    }

    // Function to change the role and restart the animation
    function changeRole() {
        roleIndex = (roleIndex + 1) % roles.length;
        text = '';
        roleElement.style.opacity = 1.0;
        updateText();
    }

    // Initial call to start the animation
    updateText();
});

// Smooth Scrolling Script using jQuery
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 60, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide the button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    // Smooth scrolling to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

// JavaScript to highlight the active link in the navigation bar
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Animate smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash to URL after scroll
                window.location.hash = hash;
            });
        }
    });

    // Function to highlight the active link
    function highlightActiveLink() {
        var scrollDistance = $(window).scrollTop();

        // Assign an ID to the section you want to highlight
        $('section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }

    // Scrollspy
    $(window).on('scroll', function () {
        highlightActiveLink();
    });

    // Highlight active link on page load
    highlightActiveLink();
});

// Wait for the entire page to load
window.addEventListener('load', function () {
    // Get the preloader element
    var preloader = document.getElementById('preloader');

    // Hide the preloader
    preloader.style.display = 'none';
});
