function Day({ date, highlight }: { date: Date; highlight: boolean }) {
  return (
    <div
      className={`bg-white w-10 h-10 rounded flex justify-center items-center ${
        highlight ? "bg-slate-700 text-slate-100" : ""
      }`}
      style={{ gridColumnStart: date.getDay() + 1 }}
    >
      <p className="font-bold cursor-default">{date.getDate()}</p>
    </div>
  );
}

export default Day;
