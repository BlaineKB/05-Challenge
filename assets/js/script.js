// Function that updates the time on the page and changes the status of the timeblocks
function timeChange() {
  let today = moment();

  // Updates time in the header using moment.js
  $('#currentDay').text(today.format('dddd, MMMM Do YYYY, h:mm a'));

  // A for loop that iterates through the timeblocks and changes their textarea background color based on whether they are in the 'past', 'present', or 'future'
  let now = moment().format('k');
  for (let i = 0; i < plannerElArray.length; i++) {
    plannerElArray[i].removeClass('future past present');

    if (now > plannerElArray[i].data('hour')) {
      plannerElArray[i].addClass('past');
    } else if (now === plannerElArray[i].attr('data-hour')) {
      plannerElArray[i].addClass('present');
    } else {
      plannerElArray[i].addClass('future');
    }
  }
}


// Declares the textarea elements and packages them into an array
let plan8am = $('#8am');
let plan9am = $('#9am');
let plan10am = $('#10am');
let plan11am = $('#11am');
let plan12pm = $('#12pm');
let plan1pm = $('#1pm');
let plan2pm = $('#2pm');
let plan3pm = $('#3pm');
let plan4pm = $('#4pm');
let plan5pm = $('#5pm');
let containEl = $('.container');
let saveBtn = $('.save-btn');

let plannerElArray = [
  plan8am,
  plan9am,
  plan10am,
  plan11am,
  plan12pm,
  plan1pm,
  plan2pm,
  plan3pm,
  plan4pm,
  plan5pm,
];

renderSavedData();
timeChange();
setInterval(timeChange, 1000);

// Function that displays saved data from local storage
function renderSavedData() {
  for (let el of plannerElArray) {
    el.val(localStorage.getItem("timeblock " + el.data("hour")));
  }
}

// Function that maintains user click events and saves the text for individual time blocks to the local storage
function onClick(event) {
  event.preventDefault();

  let btnClick = $(event.currentTarget);
  let targetPlan = btnClick.siblings('textarea');
  let targetTimeBlock = targetPlan.data('hour');

  localStorage.setItem("timeblock " + targetTimeBlock, targetPlan.val());
}


saveBtn.on('click', onClick);