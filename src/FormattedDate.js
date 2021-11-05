export default function FormattedDate(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let month = props.date.getMonth() + 1;
  let DD = props.date.getDate();
  let year = props.date.getFullYear();
  return (
    <div className="FormattedDate">
      <div className="current-date">
        <div>
          {hours}:{minutes}
        </div>
        <div> {day}</div>
        <div>
          {month}/{DD}/{year}
        </div>
      </div>
    </div>
  );
}
