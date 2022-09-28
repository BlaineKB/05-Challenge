test = moment().format('k');
console.log(test);

test2 = moment().format('MMMM Do YYYY, h:mm a');
console.log(test2);

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


function timeChange() {
  let today = moment();

  $('#currentDay').text(today.format('dddd, MMMM Do YYYY, h:mm a'));

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
  console.log(now);
}

timeChange();
setInterval(timeChange, 1000);