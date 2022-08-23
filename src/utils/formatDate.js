export default function getDate(ISOstr) {
  let date = new Date(ISOstr);
  let stringedDate = date.toString();
  let dividedStr = stringedDate.split(":00 GMT+0200");
  let str = dividedStr[0];
  let dividedBySpaces = str.split(" ");

  let dividedBySpacesStr0 = dividedBySpaces[0].concat("., ").toLowerCase();
  let dividedBySpacesStr1 = dividedBySpaces[1].concat(". ").toLowerCase();
  let dividedBySpacesStr2 = dividedBySpaces[2].concat(", ");
  if (dividedBySpacesStr2[0] === "0") {
    dividedBySpacesStr2 = dividedBySpacesStr2.replace("0", " ");
  }
  console.log(dividedBySpacesStr2[0]);
  let finalString = dividedBySpacesStr0.concat(
    dividedBySpacesStr1,
    dividedBySpacesStr2,
    dividedBySpaces[dividedBySpaces.length - 1]
  );
  return finalString;
}
