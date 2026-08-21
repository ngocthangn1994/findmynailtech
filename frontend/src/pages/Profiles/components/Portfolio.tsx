import service1 from "../../../assets/explore_service_photo1.png";
import service2 from "../../../assets/explore_service_photo2.png";
import service3 from "../../../assets/explore_service_photo3.png";
import service4 from "../../../assets/explore_service_photo4.png";
import service5 from "../../../assets/explore_service_photo5.png";
import reviews from "../../../assets/reviews.png";
function Portfolio() {
  const menu = [
    "All",
    "Acrylic",
    "Gel",
    "Nail Art",
    "Pedicure",
    "French",
    "Gel-X",
  ];
  const photos = [
    service1,
    service2,
    service3,
    service4,
    service5,
    service5,
    service3,
    service1,
    service2,
    service4,
  ];
  return (
    <>
      <div className="text-slate-600 space-y-3">
        <p className="font-bold">Portfolio</p>
        <div className="flex justify-between">
          {menu.map((item) => (
            <p className="p-2 bg-slate-50 shadow-sm rounded-xl font-medium">
              {item}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3 space-y-3">
          {photos.map((item) => (
            <div>
              <img
                className="w-full h-full object-cover rounded-xl"
                src={item}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-3">
          <button className="bg-white text-pink-600 border border-pink-600 rounded p-2 font-medium">
            View Full portfolio (56 photos)
          </button>
        </div>
      </div>
      <div>
        <img className="w-full h-full object-cover" src={reviews} />
      </div>
    </>
  );
}
export default Portfolio;
