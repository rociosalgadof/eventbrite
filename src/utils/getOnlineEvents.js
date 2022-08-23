export default function getOnlineEvents(arr) {
  let online = [];
  for (let event of arr) {
    if (event.online_event) {
      online.push(event);
    }
  }
  return online;
}
