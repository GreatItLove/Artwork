/**
 * @description convert Timestamp to date
 * @link https://gist.github.com/kmaida/6045266
 * @param timestamp
 * @return {string|*}
 */
function convertTimestamp(timestamp) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = monthNames[d.getMonth()],
    dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = 'AM',
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh === 0) {
    h = 12;
  }

  time = mm + ' ' + dd + ', ' + yyyy + ' ' + h + ':' + min + ' ' + ampm;

  return time;
}

export default convertTimestamp;
