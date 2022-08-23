export default function formatName(str) {
  let text;
  if (str.includes(" ")) {
    text = str.replace(" ", "_");
  } else {
    text = str;
  }
  return text;
}
