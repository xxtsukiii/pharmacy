// Prevent dropdown menu from closing when click inside the form
$(document).on("click", ".action-buttons .dropdown-menu", function (e) {
    e.stopPropagation();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});