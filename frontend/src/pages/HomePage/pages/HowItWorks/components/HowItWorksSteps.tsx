import step1 from "../../../../../assets/step1.png";
import step2 from "../../../../../assets/step2.png";
import step3 from "../../../../../assets/step3.png";
import step4 from "../../../../../assets/step4.png";

function HowItWorksSteps() {
  const items = [
    {
      number: 1,
      photo: step1,
      name: "Find Your Nail Tech",
      description:
        "Search by location, service, price, ratings, and available to find the perfect nail tech near you.",
    },
    {
      number: 2,
      photo: step2,
      name: "Book with Ease",
      description:
        "Choose your service, select a date and time, and your address, and pay a secure deposit.",
    },
    {
      number: 3,
      photo: step3,
      name: "Relax & Enjoy",
      description:
        "Your nail tech comes to you with everything needed. Sit back and enjoy your salon-quality experience.",
    },
    {
      number: 4,
      photo: step4,
      name: "Love Your Nails",
      description:
        "Pay the remaining balance, leave a review, and book your next appoinment whenever you're ready.",
    },
  ];
  return (
    <>
      <div className="text-slate-600">
        <div className="grid grid-cols-4 gap-5 p-10">
          {items.map((item) => (
            <div className="bg-white border border-slate-200 rounded">
              <div className="w-full h-64">
                <img
                  className="w-full h-full rounded object-cover"
                  src={item.photo}
                />
              </div>
              <div className="p-5 text-center space-y-2">
                <p className="text-3xl p-2 rounded shadow-sm w-full bg-pink-100 text-pink-600 font-bold">
                  {item.number}
                </p>
                <p className="font-bold text-xl">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowItWorksSteps;
