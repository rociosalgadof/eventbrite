import formatName from "./formatName";

export default function getIdsPerCity(arr1, arr2) {
  let cityObj = {};
  for (let city of arr1) {
    cityObj = { ...cityObj, [formatName(city)]: [] };
  }
  for (let venue of arr2) {
    let city = formatName(venue.address.city);
    cityObj = {
      ...cityObj,
      [city]: [...cityObj[city], venue.id],
    };
  }

  return cityObj;
}
