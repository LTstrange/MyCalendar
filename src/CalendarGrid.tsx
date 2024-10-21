import Day from "./Day";
import { isSameDay } from "./utils";

function CalendarGrid({ dates, cur_date }: { dates: Date[]; cur_date: Date }) {
  return (
    <div
      className="
        grid grid-cols-7
        max-w-lg max-h-96 min-h-60 min-w-96 size-full
        place-items-center place-self-center
        "
    >
      {dates.map((date, index) => (
        <Day key={index} date={date} highlight={isSameDay(cur_date, date)} />
      ))}
    </div>
  );
}

export default CalendarGrid;
