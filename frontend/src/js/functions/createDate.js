export function createDate(date) {
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const time = `${hours}:${minutes}`;
  const DateTime = `${day}.${month}.${year}<span class="client-date__time">${time}</span>`;

  return DateTime;
}
