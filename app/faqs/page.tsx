"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is Asikaso?",
    answer:
      "Asikaso is a PH Government Services portal providing easy access to common public services and information.",
  },
  {
    question: "How do I find a service?",
    answer:
      "Go to the Services page to browse available services, or use the search on the homepage to locate specific offerings.",
  },
//   {
//     question: "Is my data safe?",
//     answer:
//       "We follow best practices for handling user data. This example project doesn't implement real persistence — integrate your backend and security measures for production.",
//   },
];

function AccordionItem({ faq, isOpen, onToggle }: { faq: Faq; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-blue-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-4 px-6 text-left hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="font-medium text-blue-900 text-lg">{faq.question}</div>
        </div>

        <div className={`ml-4 flex-shrink-0 transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      <div className={`${isOpen ? "block" : "hidden"} px-6 pb-4 text-sm text-blue-800`}>{faq.answer}</div>
    </div>
  );
}

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-sm text-blue-700 mb-6">Tap a question to reveal the answer.</p>

        <div className="bg-white rounded-lg shadow-sm divide-y">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
