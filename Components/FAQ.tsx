"use client"
import React, { useState } from "react";

const DetailsSection = () => {
  const faqs = [
    {
      question: "What is Blockathon?",
      answer:
        "Blockathon is an Blockchain and Cybersecuity Hackathon organized as part of Thiran 2025, an inter-college techno-cultural-sports fest at Sri Eshwar College of Engineering.",
    },
    {
      question: "When and where will Blockathon take place?",
      answer: "Blockathon will take place on 20 February, 2025 at Sri Eshwar College of Engineering, Coimbatore.",
    },
    {
      question: "What is the team size for Blockathon?",
      answer: "Each team must consist of exactly 4 members from the same college/university.",
    },
    {
      question: "What are the prizes for Blockathon?",
      answer:
        "Exciting cash prizes and industry internship opportunities await the top-performing teams.",
    },
    {
      question: "Are there any special awards for participants?",
      answer:
        "Yes, there are special awards for the most innovative solutions presented during the hackathon.",
    },
    {
      question: "How can I register for Blockathon?",
      answer:
        "The team leader can register their team using the link provided on the official website.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 mb-10">
          Answered all frequently asked questions. Still confused? Feel free to contact us.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-200">
                  {faq.question}
                </span>
                <span className="text-gray-400">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-400 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
