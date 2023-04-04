export function createLinkGoogleCalendar({
  text, dates, details, location,
}: {
    text: string;
    dates: string;
    details: string;
    location: string;
}) {
  return `http://www.google.com/calendar/event?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}&trp=false&sprop=&sprop=${text}`;
}
