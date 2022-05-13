(function ($) {

    // Slider

    const slider = new Swiper ('.view-slider__content', {
        loop: true,
        effect: "fade",
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '#slider-pagination',
            type: 'bullets',
            bulletClass: 'slider-pagination__bullet',
            bulletActiveClass: 'slider-pagination__bullet--active',
        },
        navigation: {
            nextEl: '#slider-next',
            prevEl: '#slider-prev',
        },
    })

    // Excursions

    $(".excursion__image").each(function() {
        var imgUrl = $(this).attr('data-image-src');
        $(this).css('background-image', 'url('+imgUrl+')');      
    });  

    // Files
	
    $(".file--x-office-document a").attr("target", "_blank");
    $(".file--application-pdf a").attr("target", "_blank");

    // Structure menu
	
    $(".taxonomy-menu > .taxonomy-menu__item--expanded > a").contents().unwrap().wrap('<h5 class="taxonomy-menu__subtitle">');

    // Masonry
    
    $(".masonry").imagesLoaded( function() {
        $(".masonry").masonry({      
          itemSelector: '.masonry-item',
        })         
    });

    // Popup

    $(".region-popup").append('<button class="popup-close"><span></span><span></span></button>');
    
    $(".map-link").removeAttr("href");
	  
    $(".map-link").click(function () {	
        $(".popup").fadeIn(); 
    });	
    
    $(".popup-close, .popup-overlay").click(function () {	
        $(".popup").fadeOut();	
    });

    // Mobile nav

    $(".region-header-first-right").prepend('<button class="mobile-nav-toggle"><span></span><span></span><span></span></button>');
    
    $(".mobile-nav-toggle").click(function() {               
        if(!$(this).hasClass("mobile-nav-toggle--active")) {  
            $(this).addClass("mobile-nav-toggle--active");          
            $(".page-overlay").fadeIn();
            gsap.to(".mobile-nav", {
                ease: "power2.out",  
                duration: 0.75,      
                x: "0%"          
            })    
        }
        else {      
            $(this).removeClass("mobile-nav-toggle--active");      
            $(".page-overlay").fadeOut()
            gsap.to(".mobile-nav", {
                ease: "power2.out",  
                duration: 0.5,      
                x: "100%"
            })    
        }
    });	

    $(".page-overlay").click(function() {  
        $(this).fadeOut()   
        $(".mobile-nav-toggle").removeClass("mobile-nav-toggle--active")         
        gsap.to(".mobile-nav", {
            ease: "power2.out",  
            duration: 0.5,      
            x: "100%"
        })  
    });
  
})(jQuery);