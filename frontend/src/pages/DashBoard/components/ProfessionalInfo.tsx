function ProfessionalInfo() {
  const infos = [
    { name: "Title/Profession", description: "Nail Technician" },
    { name: "Years of Experience", description: "6" },
    {
      name: "Specialty",
      description: ["Gel Manicure", "Acrylic Nails", "Nail Art"],
    },
    { name: "Language", description: ["English", "Vietnamese"] },
  ];
  return (
    <>
      <div className="p-5 border border-slate-200 shadow-sm text-slate-600">
        <p className="font-bold">Professional Information</p>

        <div className="grid grid-cols-2 gap-5">
          {infos.map((item) => (
            <div>
              <label className="font-medium">{item.name}</label>
              <input className="border w-full rounded border-slate-200 p-1" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProfessionalInfo;
