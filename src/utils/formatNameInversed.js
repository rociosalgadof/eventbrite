export default function formatNameInversed(str) {
  let text;
  if (str.includes("_")) {
    text = str.replace("_", " ");
  } else {
    text = str;
  }
  return text;
}
