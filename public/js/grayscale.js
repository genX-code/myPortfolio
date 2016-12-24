/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


 
  //Google Maps JS
  //Set Map

  function init_map() {
    var myLatlng = new google.maps.LatLng(14.1311947,120.90156419999994);
    var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('gmap_canvas'), mapOptions);
    
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: '1424 Perey Street <br/>Asis, Mendez, Cavite'
    });

    //Add Marker
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: imagePath,
      title: 'My Location'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  }

  google.maps.event.addDomListener(window, 'load', init_map);

