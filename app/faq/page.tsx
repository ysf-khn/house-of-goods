import React from "react";

const faqs = [
  {
    question: "What is House of Goods?",
    answer:
      "House of Goods is your destination for curated home decor, furniture, lighting, and more.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via our contact form or email us at sales@houseofgoodsllc.com.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to many countries worldwide. Shipping costs and times vary by location.",
  },
  {
    question: "Can I return an item?",
    answer: "Absolutely! We offer a 30-day return policy on most items.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We carefully curate our products from trusted suppliers and perform quality checks before shipping to ensure you receive only the best.",
  },
  {
    question: "How are items packaged for delivery?",
    answer:
      "All items are securely packaged using protective materials to prevent damage during transit. Fragile items receive extra care and padding.",
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
