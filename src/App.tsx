import CalendarGrid from "./CalendarGrid";
import NumberBar from "./NumberBar";
import { getDaysInMonth } from "./utils";
import { useState } from "react";

const cur_date = new Date();

function App() {
  const [date, setDate] = useState(cur_date);

  const dates = getDaysInMonth(date);

  const year = date.getFullYear();
  const month_0base = date.getMonth();

  return (
    <div
      className="
        flex flex-col items-center
        shadow-xl rounded-lg
        bg-slate-200
        "
    >
      <div
        className="
          flex flex-col justify-between 
          gap-2 m-4
          "
      >
        <NumberBar
          arrowLeft="<<"
          arrowRight=">>"
          number={year}
          setter={(new_year) =>
            setDate(new Date(new_year, month_0base, date.getDate()))
          }
        />
        <NumberBar
          arrowLeft="<"
          arrowRight=">"
          number={month_0base + 1}
          setter={(new_month) =>
            setDate(new Date(year, new_month - 1, date.getDate()))
          }
        />
        <CalendarGrid dates={dates} cur_date={cur_date} />
      </div>
    </div>
  );
}

export default App;
