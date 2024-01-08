"use client";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";

// FAQ data
const faqData = [
  {
    question: "Why an Online Installment Loan?",
    answer:
      "Consumers have multiple types of loans from which to choose, including home loans, car loans, credit card advances, and home equity loans. Online installment loans are designed to help when you need a short-term loan fast and have bad credit or even no credit.Consider an online installment loan if you’re short on money, don’t have other credit options, and need help with expenses.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application process is fast as it is done completely online. Most people complete the process in about 10 minutes.If you accepted your loan terms on a Monday through Friday, before 11:30 a.m. CT, Grandlendings will transfer the money to your bank by no later than the end of the same business day. If you accepted your loan terms on a Monday through Thursday between 11:30 a.m. CT and 8 p.m. CT, Grandlendings will transfer your funds to your bank overnight. If you accepted your loan terms on a Friday after 11:30 a.m. CT through anytime on Sunday, Grandlendings will transfer your money over the weekend and it will arrive at your bank by the end of the next business day.",
  },
  {
    question: "What are the eligibility criteria for a loan?",
    answer:
      "To be eligible for a loan from Grandlendings, you must be at least 18 years old, have a steady source of income, and meet our creditworthiness requirements. Additional criteria may apply depending on the type and amount of the loan.",
  },
  {
    question: "What if I have bad credit?",
    answer:
      "Most lenders shy away from lower credit scores that rely on prior loan and credit card history available from the 3 credit bureaus. However, we reach beyond the bureaus and scores using an advanced algorithm to spot real people with the real intent to pay, despite low credit scores, past credit problems, or lacking credit history.If you have a bad credit score, or have not borrowed before, Grandlendings can help you get money fast. No collateral is required.",
  },
  // Add more FAQ items here
];

export default function FAQ() {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleAccordion = (index) => {
  //   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  return (
    <div className="mt-14 ">
      <div className="faq-container bg-purple-800   py-5 px-4 sm:px-8 md:px-16 lg:px-24">
        {faqData.map((item, index) => (
          <Collapsible
            key={index}
            className="border rounded-md overflow-hidden shadow-sm my-1 dark:border-gray-800"
          >
            <CollapsibleTrigger asChild>
              <div className="flex justify-between bg-white items-center p-4">
                <h4 className="text-sm font-semibold">{item.question}</h4>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className=" border-t /border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800">
                {item.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
