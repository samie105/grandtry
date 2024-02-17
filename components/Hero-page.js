/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";
import { useRouter } from "next/navigation";

export default function HeroPage() {
  const { formData, setFormData } = useContext(FormDataContext);
  const [formError, setFormError] = useState(false);
  const router = useRouter();

  const handleLoanAmountChange = (event) => {
    const amount = parseFloat(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      loanAmount: event.target.value,
    }));
    calculateLoanDetails(amount, formData.loanDuration);
  };

  const handleLoanDurationChange = (event) => {
    const duration = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      loanDuration: duration,
    }));
    calculateLoanDetails(formData.loanAmount, duration);
  };

  const calculateLoanDetails = (amount, duration) => {
    const baseInterestRate = 5; // Base interest rate in percentage
    const interestIncreaseRate = 2.5; // Interest increase rate in percentage
    const monthsInYear = 12; // Number of months in a year

    let interestRate = baseInterestRate;
    if (duration > 6) {
      const additionalMonths = Math.floor((duration - 6) / 6); // Subtract 6 to align with base duration
      interestRate += additionalMonths * interestIncreaseRate;
    }

    const monthlyInterestRate = interestRate / monthsInYear / 100;
    const totalAmountPaid = amount * (1 + monthlyInterestRate * duration);
    const monthlyPayment = totalAmountPaid / duration;

    setFormData((prevFormData) => ({
      ...prevFormData,
      monthlyPayment: monthlyPayment.toFixed(2),
      interest: (monthlyInterestRate * 100).toFixed(2),
      totalAmountPaid: totalAmountPaid.toFixed(2),
    }));
  };

  const formatAmount = (value) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(value);
  };

  const handleLoanApplication = () => {
    if (formData.loanAmount && formData.loanDuration) {
      // Submit the loan application
      setFormError(false);
      console.log("Loan application submitted!");

      // Redirect to "/loan" page

      router.push("/loan");
    } else {
      setFormError(true);
    }
  };
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 relative /bg-purple-800 z-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold /tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Get Your Loan Approved Instantly
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 text-sm md:text-base py-2 md:px-4">
                We provide easy and quick personal loans for any purpose. Low
                interest rates, easy application process and quick approval!
              </p>
            </div>{" "}
            <div className="space-x-4">
              {" "}
              <Link
                href={"/loan"}
                target="_blank"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-800  transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-800"
              >
                Apply Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-800"
                href="/about-us"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
