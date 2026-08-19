import howItWork1 from "../../../assets/howitwork1.png";
import howItWork2 from "../../../assets/howitwork2.png";
import howItWork3 from "../../../assets/howitwork3.png";
function HowItWorks() {
  const menu = [
    {
      photo: howItWork1,
      name: "Find your nail tech",
      description:
        "Search trusted mobile nail technicians near you by location, services, price, ratings, and availability.",
    },
    {
      photo: howItWork2,
      name: "Book your appointment",
      description:
        "Choose your service, date, time, and preferred location. Pay your booking deposit securely.",
    },
    {
      photo: howItWork3,
      name: "Get beautiful nails",
      description:
        "Your technician comes to you. Relax and enjoy your salon-quality experience at home.",
    },
  ];
  return (
    <>
      <div className="space-y-3">
        <p className="text-pink-600 font-medium">HOW IT WORKS</p>
        <p className="font-bold text-xl">
          Salon-quality nails without leaving home.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-5 shadow-sm p-1">
          {menu.map((item) => (
            <div className="bg-white rounded-2xl">
              <div className="w-full h-68 rounded-xl">
                <img className="w-full h-full object-cover" src={item.photo} />
              </div>
              <div className="p-2 text-center">
                <p className="font-bold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
