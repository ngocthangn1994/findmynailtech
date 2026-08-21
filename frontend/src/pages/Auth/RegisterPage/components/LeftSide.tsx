import login from "../../../../assets/login.png";
import Logo from "../../../../components/Logo";
import { RxAvatar } from "react-icons/rx";
import { IoMdPhotos } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function LeftSide() {
  const menu = [
    {
      icon: <RxAvatar />,
      name: "Create Your Profile",
      description: "Build a beautiful profile that represents your brand.",
    },
    {
      icon: <IoMdPhotos />,
      name: "Showcase Your Work",
      description: "Upload porfolio photos and attract more clients.",
    },
    {
      icon: <CiLocationArrow1 />,
      name: "Reach Local Clients",
      description: "Get discovered by clients near you.",
    },
    {
      icon: <CiStar />,
      name: "Build Your Reputation",
      description: "Get reviews and grow your nail business.",
    },
  ];
  return (
    <>
      <div className="relative text-slate-600 space-y-3 w-full min-h-[720px] overflow-hidden">
        <img className="w-full h-full object-cover" src={login} />
        <div className="absolute inset-0 p-10">
          <Logo />
          <div className="font-bold text-3xl">
            <p>Join FindMyNailTech</p>
            <p>and Grow Your</p>
            <p className="text-pink-600">Nail Business</p>
          </div>
          <p className="w-xs mt-3">
            Create your professional profile, showcase your amazing work, and
            connect with clients in your area.
          </p>

          <div className="space-y-3 mt-10">
            {menu.map((item) => (
              <div className="flex items-center gap-3 w-[230px] bg-pink-50 rounded-xl p-2">
                <span className="text-2xl p-2 bg-pink-100 rounded-full text-pink-600">
                  {item.icon}
                </span>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
