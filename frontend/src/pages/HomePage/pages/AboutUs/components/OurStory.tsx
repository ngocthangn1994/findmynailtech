import ourStory from "../../../../../assets/ourstory.png";

function OurStory() {
  return (
    <div className="grid grid-cols-2 gap-5 items-center">
      <div className="text-slate-600 space-y-1 shadow-sm p-10">
        <p className="font-medium text-pink-600">OUR STORY</p>

        <p className="font-bold text-4xl text-slate-900">Built With Passion</p>

        <div className="text-4xl font-bold flex gap-2">
          <p className="text-slate-900">Driven by</p>
          <p className="text-pink-600">Purpose</p>
        </div>

        <div className="max-w-xl space-y-3 mt-3 text-xl">
          <p>
            FindMyNailTech was created with a simple idea: make it easier for
            clients to discover talented nail technicians near them and see
            their work before reaching out.
          </p>

          <p>
            We built a platform where nail professionals can showcase their
            portfolio, services, experience, and location while helping clients
            find and connect with the right nail tech for their style.
          </p>
        </div>
      </div>

      <div className="w-full h-[80%]">
        <img
          className="w-full h-full rounded object-cover"
          src={ourStory}
          alt="Our FindMyNailTech story"
        />
      </div>
    </div>
  );
}

export default OurStory;
