import { MdOutlineMail } from "react-icons/md";

function FrequentlyAskedQuestions() {
  const questions = [
    "How does FindMyNailTech work?",
    "How do I find nail technicians near me?",
    "Do I need an account to search for nail techs?",
    "What information can I see on a nail tech profile?",
    "How do I contact a nail technician?",
    "Does FindMyNailTech handle bookings or payments?",
    "How do ratings and reviews work?",
    "How can I create a nail technician profile?",
  ];

  return (
    <div className="shadow-sm p-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <p className="text-pink-600 font-medium">FREQUENTLY ASKED QUESTIONS</p>

        <p className="text-2xl font-bold text-slate-900">We're here to help.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 shadow-sm rounded-lg p-4 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-pink-100 shadow-sm rounded-2xl flex flex-col items-center justify-center text-center space-y-3 p-8">
        <p className="text-pink-600 font-bold text-xl">Still have questions?</p>

        <p className="text-slate-600">
          Visit our Help Center or contact our support team.
        </p>

        <button className="bg-pink-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-pink-700">
          Visit Help Center
        </button>

        <div className="flex items-center gap-2">
          <MdOutlineMail className="text-pink-600" />
          <p className="text-slate-600">support@findmynailtech.com</p>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
