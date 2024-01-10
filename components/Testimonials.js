/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yY9Pkbdol3y
 */
export default function Testimonial() {
  return (
    <div
      key="1"
      className="w-full  bg-purple-800 flex flex-col items-center justify-center px-10 py-4"
    >
      <header className="mb-10">
        <h1 className="text-xl lg:text-4xl font-bold text-white">
          Testimonials
        </h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6">
          <h2 className="text-sm font-bold text-white">Quincy Mose</h2>
          <p className="text-sm text-white opacity-60">CEO, Soto-bulls co.</p>
          <div className="flex mt-2">
            <span className="text-yellow-400">★★★★☆</span>
          </div>
          <p className="text-white mt-4">
            "Grandlendings still remains one of the best out there. It took me
            to greater levels."
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6">
          <h2 className="text-sm font-bold text-white">Cooper J. Anne</h2>
          <p className="text-sm text-white opacity-60">TrustPilot</p>
          <div className="flex mt-2">
            <span className="text-yellow-400">★★★★★</span>
          </div>
          <p className="text-white mt-4">
            "Grandlendings deems more and more reliable in loan services, this
            is wholesome!!!."
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6">
          <h2 className="text-sm font-bold text-white">Zur Olcay</h2>
          <p className="text-sm text-white opacity-60">
            Student, Bahcesehir-koleji
          </p>
          <div className="flex mt-2">
            <span className="text-yellow-400">★★★★☆</span>
          </div>
          <p className="text-white mt-4">
            Grandlendings is forever a bigger part of my educational life, it
            sits upfront my goto choice anytime."
          </p>
        </div>
      </div>
    </div>
  );
}
