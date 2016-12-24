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

//function initMap() {
//        var myAPI = 'AIzaSyBRXMuAtAtasFG4Ry5kfbb_1WNvlxrjiTA';
//        var tagaytay = {lat: 14.131195, lng: 120.901564};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 15,
//          center: tagaytay
//        });
//        var marker = new google.maps.Marker({
//          position: tagaytay,
//          map: map
//        });
//      }

 function init_map(){
      var myOptions = {
      zoom:15,
      center:new google.maps.LatLng(14.1311947,120.90156419999994),
      mapTypeId: google.maps.MapTypeId.ROADMAP};

      map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

      marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(14.1311947,120.90156419999994)});

      var infowindow = new google.maps.InfoWindow({
        content:'Asis II, Mendez, Cavite'});

      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, marker);});
        }

      google.maps.event.addDomListener(window, 'load', init_map);