'use strict'

// Reference ISO
// http://www.lingoes.net/en/translator/langcode.htm

function show(description, result) {
    document.writeln('<tr><td>' + description + '</td><td>' + result + '</td></tr>')
}
var currentdate = new Date();

var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const missionDate = new Date(1969, 6, 20, 20, 17, 40);

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

show(
    'Todays date, automatically translated', currentdate

)
show(
    'Number of ms elapsed since 01/01/1970 at 00:00:00', currentdate.getTime()
)

show(
    'The current month', monthNames[currentdate.getMonth() + 1]
)

show(
    'Localization in Arabic of today', event.toLocaleString('ko-KR', {
        timeZone: 'UTC'
    })
)

show(
    'Offset date of today in minutes with UTC', currentdate.getTimezoneOffset()
)

show(
    "Mission Apollo11: Date of landing on the Moon July 20, 1969 at 20 h 17 min 40 s UTC",
    missionDate
)