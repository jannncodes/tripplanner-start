$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(41.8884073, -87.6293817);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);
  }

    drawMarker('hotel', [41.8884073, -87.6293817]);
    drawMarker('restaurant', [41.9134555, -87.6503527]);
    drawMarker('activity', [41.8675766, -87.6162267])
});

// //Page Setup
// hotels.forEach(function(hotel) {
//   let option = $('<option></option').text(hotel.name);
//   $('#hotel-choices').append(option);
// });

// restaurants.forEach(function(restaurant) {
//   let option = $('<option></option').text(restaurant.name);
//   $('#restaurant-choices').append(option);
// });

// activities.forEach(function(activity) {
//   let option = $('<option></option').text(activity.name);
//   $('#activity-choices').append(option);
// });

// //Add hotel
// $('.hotel').on('click', '.btn', function () {
//   let selectedHotel = $('.hotel select').val();
//   $('#hotel-title').text(selectedHotel);
// });

// // //Delete item
// // $('.itinerary-item').on('click', '.btn', function () {

// // });

insertSelectPanel(hotels, restaurants, activities);
