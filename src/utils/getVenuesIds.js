export default function getVenuesIds(arr) {
  let venues = [];
  for (let event of arr) {
    if (!venues.includes(event.venue_id) && event.venue_id !== null) {
      venues.push(event.venue_id);
    }
  }
  return venues;
}


