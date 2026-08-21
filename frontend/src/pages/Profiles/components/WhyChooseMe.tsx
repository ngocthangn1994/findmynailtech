import { BiCheckCircle } from "react-icons/bi";

function WhyChooseMe() {
  const items = [
    "Detail oriened",
    "Friendly & professional",
    "Clean & comfortable space",
    "On-time & reliable",
    "Great with nail art",
  ];
  return (
    <>
      <div className="p-5 shadow-sm space-y-3">
        <p className="font-bold">Why Clients Choose Amy</p>
        {items.map((item) => (
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-pink-600" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyChooseMe;
