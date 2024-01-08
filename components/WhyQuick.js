/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function WhyQuick() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-32 bg-purple-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <Image
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/assets/whyquck.jpg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 dark:bg-gray-800 dark:bg-opacity-10">
            <div className="space-y-2">
              <h2 className="text-xl pb-3 font-bold tracking-tighter text-white sm:text-3xl">
                Why Grandlendings?
              </h2>
              <p className="max-w-[600px] text-sm text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Grandlendings is a better way to borrow extra money. It's not a
                payday loan. It's an installment loan, which means you pay down
                the balance with each on-time payment. Borrow from $300 to $1500
                - up to $800 for new and repeat borrowers, and up to $1500 for
                preferred borrowers with 10 or more loans! Then, pay us back a
                little at a time.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl dark:bg-gray-800 dark:bg-opacity-10">
            <FastForwardIcon className="mb-4 h-16 w-16 text-white" />
            <h3 className="text-lg font-semibold text-white">Fast Approval</h3>
            <p className="text-gray-200 text-center text-sm dark:text-gray-400">
              Get approved for a loan in minutes with our quick and easy
              application process.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl dark:bg-gray-800 dark:bg-opacity-10">
            <CalendarIcon className="mb-4 h-16 w-16 text-white" />
            <h3 className="text-lg font-semibold text-white">
              Flexible Payments
            </h3>
            <p className="text-gray-200 text-sm text-center dark:text-gray-400">
              Choose a payment plan that works for you and pay back your loan
              over time.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl dark:bg-gray-800 dark:bg-opacity-10">
            <LockIcon className="mb-4 h-16 w-16 text-white" />
            <h3 className="text-lg font-semibold text-white">
              Secure and Confidential
            </h3>
            <p className="text-gray-200 text-sm text-center dark:text-gray-400">
              Your personal information is kept safe and confidential with our
              secure system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function FastForwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
