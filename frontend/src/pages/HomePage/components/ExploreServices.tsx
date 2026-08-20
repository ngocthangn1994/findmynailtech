import AcrylicNails from "../../../assets/explore_service_photo1.png";
import GelManicure from "../../../assets/explore_service_photo2.png";
import GelPedicure from "../../../assets/explore_service_photo3.png";
import NailArt from "../../../assets/explore_service_photo4.png";
import AcrylicFill from "../../../assets/explore_service_photo5.png";

function ExploreServices() {
  const menu = [
    { photo: AcrylicNails, name: "Acrylic Nails" },
    { photo: GelManicure, name: "Gel Manicure" },
    { photo: GelPedicure, name: "Gel Pedicure" },
    { photo: NailArt, name: "Nail Art" },
    { photo: AcrylicFill, name: "Acrylic Fill" },
  ];
  return (
    <>
      <div className="space-y-2 shadow-sm p-5">
        <p className="text-pink-600 font-medium">EXPLORE SERVICES</p>
        <p className="font-bold text-xl">What are you looking for?</p>
        <p className="mt-1">Find talented professionals for your favorite</p>
        <div className="grid grid-cols-5 gap-3">
          {menu.map((item) => (
            <div className="overflow-hidden rounded-xl bg-white">
              <div className="w-full h-48">
                <img className="w-full h-full object-cover" src={item.photo} />
              </div>
              <div className="text-center p-2">
                <p className="font-bold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button className="text-pink-600 bg-white p-2 rounded border border-pink-600 font-bold">
            View All Services.
          </button>
        </div>
      </div>
    </>
  );
}

export default ExploreServices;
