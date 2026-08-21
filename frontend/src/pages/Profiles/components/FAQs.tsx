import { TiArrowRight } from "react-icons/ti";

function FAQs() {
  return (
    <>
      <div className="p-5 shadow-sm space-y-3">
        <p className="font-bold">FAQs</p>
        <div>
          <p>Do you travel to clients?</p>
          <p>What is your cancellation policy?</p>
          <p>What payment methods do you accepts?</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-pink-600 font-bold">View all FAQs</button>
          <TiArrowRight className="text-pink-600 text-2xl" />
        </div>
      </div>
    </>
  );
}
export default FAQs;
