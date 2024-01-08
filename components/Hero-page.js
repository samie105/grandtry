"use client";
import Link from "next/link";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

export default function HeroPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Get Your Loan Approved Instantly
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 text-sm md:text-base py-2 md:px-4">
                We provide easy and quick personal loans for any purpose. Low
                interest rates, easy application process and quick approval!
              </p>
            </div>
            <div className="space-x-4">
              <Dialog>
                <DialogTrigger>
                  <div className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-800 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600">
                    Apply Now
                  </div>
                </DialogTrigger>
                <DialogContent>uilgujh</DialogContent>
              </Dialog>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
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
