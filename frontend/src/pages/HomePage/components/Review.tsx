import { FaStar } from "react-icons/fa";

function ReViews() {
  const fiveStars = () => {
    return (
      <div className="flex text-pink-600">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    );
  };
  const customers = [
    {
      review:
        "“Finding a nail tech was so easy. I booked someone near me and she came right to my apartment. My nails look amazing!”",
      name: "Jessica M.",
      location: "Houston, TX",
    },
    {
      review:
        "“I love being able to compare prices, photos and reviews before booking. Such a great experience!”",
      name: "Ashley R.",
      location: "Houston, TX",
    },
    {
      review:
        "“Perfect when I don’t have time to drive to a salon. My nail tech is so professional and friendly!”",
      name: "Maria L.",
      location: "Sugar Land, TX",
    },
  ];
  return (
    <>
      <div className="space-y-3 bg-white p-5 shadow-sm rounded-xl">
        <p className="text-pink-600 font-medium">LOVED BY NAIL CLIENTS</p>
        <div className="grid grid-cols-3 gap-3">
          {customers.map((item) => (
            <div className="p-3">
              <div>
                {fiveStars()}
                <p>{item.review}</p>
                <div className="mt-5">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-slate-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReViews;
