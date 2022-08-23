export default function getCities(arr) {
  let cities = [];
  for (let venue of arr) {
    if (!cities.includes(venue.address.city)) {
      cities.push(venue.address.city);
    }
  }
  return cities;
}
