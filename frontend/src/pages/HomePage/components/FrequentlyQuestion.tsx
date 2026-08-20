import { MdOutlineMail } from "react-icons/md";

function FrequentlyQuestion() {
  const questions = [
    "How does FindMyNailTech work?",
    "Do nail technicians come to my home?",
    "How do I find techs near me?",
    "How much does a mobile nail technician cost?",
    "How do I pay for my appoinment",
    "Can I cancel or reschedule an appoinment",
    "How are nail technicians verified",
    "How can I become a nail technician on FindMyNailTech",
  ];
  return (
    <>
      <div className="shadow-sm p-5 grid grid-cols-2 gap-10">
        <div>
          <p className="text-pink-600 font-medium">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <p className="text-2xl font-bold text-slate-900">
            We're here to help.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {questions.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
        <div className="bg-pink-200 shadow-sm rounded-2xl flex flex-col items-center justify-center space-y-2">
          <p className="text-pink-600 font-bold text-xl">
            Still have questions?
          </p>
          <p>Visit our Help Center or contact our support team.</p>
          <button className="bg-pink-600 text-white p-2 rounded">
            Visit Help Center
          </button>
          <div className="flex items-center gap-1">
            <MdOutlineMail className="text-pink-600" />
            <p>support@findmynailtech.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrequentlyQuestion;
