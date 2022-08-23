export default function getEventsPresenciales(arr1, arr2) {
  let show = [];
  for (let event of arr2) {
    if (arr1.includes(event.venue_id)) {
      show = [...show, event];
    }
  }
  return show;
}
