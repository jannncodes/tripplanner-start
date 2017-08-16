const itinerary = {
};

const Day = function () {
    this.hotel = '';
    this.restaurants = {};
    this.activities = {};
}

itinerary.addListItems = function (day, category) {
  let finalStr = '';
  for(var key in day[category]) {
    finalStr += day[category][key];
  }
  return finalStr;
};

itinerary.addDay = function () {
  numDays++;
  itinerary[numDays] = new Day();

}

let numDays = 1;

itinerary[numDays] = new Day();

const currentDay = itinerary[1];

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
    let selectedRestaurant = $('.restaurant select').val()

    //update state
    currentDay.restaurants[selectedRestaurant] = `<li class="itinerary-item" value="restaurants"> ${selectedRestaurant}` + '  ' + `${deleteButton()} </li>`;

    //render new state
    setDayItinerary( currentDay );
  });

  $('.activity').on('click', '.btn', function () {
    let selectedActivity = $('.activity select').val()

    //update state
    currentDay.activities[selectedActivity] = `<li class="itinerary-item" value="activities"> ${selectedActivity}` + '  ' + `${deleteButton()} </li>`;

    //render new state
    setDayItinerary( currentDay );
  });

  $('#itinerary').on('click', '.remove', function () {
    if ($(this).parent().is('#delete-hotel')) {
      $(this).parent().remove();
      currentDay.hotel = '';
    }
    else {
      let removeItem = ($(this).parent().text().slice(1, -4));
      let category = ($(this).parent().attr('value'));

      //update state
      delete currentDay[category][removeItem];


      // render new state
      setDayItinerary(currentDay);
    }
  });

  $('.day-buttons').on('click', '#day-add', function () {
    itinerary.addDay();
    let newButton = `<button class="btn btn-circle day-btn">${numDays}</button>`
    $('.day-buttons').append(newButton);
  });

}



function setBlankItinerary () {
  $('#itinerary').empty();
  $('.day-buttons').html(`
    <button class="btn btn-circle day-btn">1</button>
    <button class="btn btn-circle day-btn" id="day-add">+</button>
  `);
  $('#day-title').html(`
    <span>Day 1</span>
    <button class="btn btn-xs btn-danger remove btn-circle">x</button>
  `);
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

function setDayItinerary ( day, dayTitle ) {
  $('#itinerary').empty();
  $('.day-buttons').html(`
    <button class="btn btn-circle day-btn">1</button>
    <button class="btn btn-circle day-btn" id="day-add">+</button>
  `);
  $('#day-title').html(`
    <span>${dayTitle}</span>
    <button class="btn btn-xs btn-danger remove btn-circle">x</button>
  `);
  $('#itinerary').html(`
    <div>
      <h4>My Hotel</h4>
      <ul class="list-group">
        <div class="itinerary-item">
          <li id='delete-hotel'> ${day.hotel} </li>
        </div>
      </ul>
    </div>
    <div>
      <h4>My Restaurants</h4>
      <ul class="list-group">
         ${Object.keys(day.restaurants).length ? itinerary.addListItems(day, 'restaurants') : ''}
      </ul>
    </div>
    <div>
      <h4>My Activities</h4>
      <ul class="list-group">
        ${Object.keys(day.activities).length ? itinerary.addListItems(day, 'activities') : ''}
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
