import ourStory from "../../../../../assets/ourstory.png";
function OurStory() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 items-center">
        <div className="text-slate-600 space-y-1 shadow-sm p-10">
          <p className="font-medium text-pink-600">OUR STORY</p>
          <p className="font-bold text-4xl">Build With Passion</p>
          <div className="text-4xl font-bold flex gap-2">
            <p>Driven by </p>
            <p className="text-pink-600">Purpose</p>
          </div>
          <div className="w-xl space-y-2 mt-3 text-xl">
            <p>
              FindMyNailTech was founded by beauty lovers who saw a better way
              to connect. We understand the value of trust, convenience, and
              creativy, because we've been there too.
            </p>
            <p>
              That's why we built a platform that empowers nail technicians to
              grow their business on their own terms while making it easy for
              clients to find the perfect tech near them.
            </p>
          </div>
        </div>
        <div className="w-full h-[80%]">
          <img className="w-full h-full rounded object-cover" src={ourStory} />
        </div>
      </div>
    </>
  );
}

export default OurStory;
