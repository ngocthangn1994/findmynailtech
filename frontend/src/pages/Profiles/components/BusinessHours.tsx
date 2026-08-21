function BusinessHours() {
  const items = [
    { day: "Mon", time: "9.00 AM - 7.00 PM" },
    { day: "Tue", time: "9.00 AM - 7.00 PM" },
    { day: "Wed", time: "9.00 AM - 7.00 PM" },
    { day: "Thu", time: "9.00 AM - 7.00 PM" },
    { day: "Fri", time: "9.00 AM - 8.00 PM" },
    { day: "Sat", time: "9.00 AM - 6.00 PM" },
    { day: "Sun", time: "Closed" },
  ];
  return (
    <>
      <div className="shadow-sm p-5 text-slate-600 space-y-3">
        <p className="font-bold">BUSINESS HOURS</p>
        <div className="grid grid-cols-1 space-y-2">
          {items.map((item) => (
            <div className="grid grid-cols-[0.3fr_1.7fr] gap-1">
              <p className="font-medium">{item.day}</p>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default BusinessHours;
