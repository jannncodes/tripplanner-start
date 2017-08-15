const itinerary = {
  dayOne: {
    hotel: '',
    restaurants: [],
    activities: [],
  },
}

const currentDay = itinerary.dayOne;

function insertSelectPanel (hotels, restaurants, activities) {
  $('#options-panel').empty();
  $('#options-panel').html(`
      <div class='hotel'>
        <h4>Hotels</h4>
        <select data-type="hotel" id="hotel-choices">
        </select>
        <button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>
      </div>
      <div class='restaurant'>
        <h4>Restaurants</h4>
        <select data-type="restaurant" id="restaurant-choices">
        </select>
        <button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>
      </div>
      <div class="activity">
        <h4>Activities</h4>
        <select data-type="activity" id="activity-choices">
        </select>
        <button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>
      </div>`);

  hotels.forEach(function(hotel) {
    let option = $('<option></option').text(hotel.name);
    $('#hotel-choices').append(option);
  });

  restaurants.forEach(function(restaurant) {
    let option = $('<option></option').text(restaurant.name);
    $('#restaurant-choices').append(option);
  });

  activities.forEach(function(activity) {
    let option = $('<option></option').text(activity.name);
    $('#activity-choices').append(option);
  });

  //registers the add hotel button
  $('.hotel').on('click', '.btn', function () {
    let selectedHotel = $('.hotel select').val() + deleteButton()

    //update state
    currentDay.hotel = selectedHotel;

    //render new state
    setDayItinerary( currentDay );
  });

  $('.restaurant').on('click', '.btn', function () {
    let selectedRestaurant = $('.restaurant select').val() + deleteButton()

    //update state
    currentDay.restaurants.push( selectedRestaurant );

    //render new state
    setDayItinerary( currentDay );
  });

  $('.activity').on('click', '.btn', function () {
    let selectedActivity = $('.activity select').val() + deleteButton()

    //update state
    currentDay.activities.push( selectedActivity );

    //render new state
    setDayItinerary( currentDay );
  });

  // $('#itinerary').on('click', '.remove', function () {
  //   $(this).parent().remove();
  //   //update state
  //   currentDay.hotel = '';
  //   //render new state
  //   setDayItinerary(currentDay);
  // });
}


function setBlankItinerary () {
  $('#itinerary').empty();
  $('#itinerary').html(`
    <div>
      <h4>My Hotel</h4>
      <ul class="list-group">
        <div class="itinerary-item">
        </div>
      </ul>
    </div>
    <div>
      <h4>My Restaurants</h4>
      <ul class="list-group">
        <div class="itinerary-item">
        </div>
      </ul>
    </div>
    <div>
      <h4>My Activities</h4>
      <ul class="list-group">
        <div class="itinerary-item">
        </div>
      </ul>
    </div>`);
}

function setDayItinerary ( day ) {
  $('#itinerary').empty();
  $('#itinerary').html(`
    <div>
      <h4>My Hotel</h4>
      <ul class="list-group">
        <div class="itinerary-item">
          <li> ${day.hotel} </li>
        </div>
      </ul>
    </div>
    <div>
      <h4>My Restaurants</h4>
      <ul class="list-group">
        <div class="itinerary-item">
          <li> ${day.restaurants} </li>
        </div>
      </ul>
    </div>
    <div>
      <h4>My Activities</h4>
      <ul class="list-group">
        <div class="itinerary-item">
          <li> ${day.activities} </li>
        </div>
      </ul>
    </div>`);
}


// //Delete item
const deleteButton = () => {
  return `<button class="btn btn-xs btn-danger remove btn-circle">x</button>`;
}

// const registerDeleteButton = () => {$('.itinerary-item').on('click', '.btn', function () {
//   console.log('hit the delete button');
// })}
