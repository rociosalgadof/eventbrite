import formatName from "./formatName";

export default function createStateObject(arr) {
  let object = {
    online: false,
    presenciales: false,
    all: true,
    cities: {
      [formatName(arr[0])]: true,
    },
  };
  for (let i = 1; i < arr.length; i++) {
    object = {
      ...object,
      cities: {
        ...object.cities,
        [formatName(arr[i])]: false,
      },
    };
  }
  return object;
}
