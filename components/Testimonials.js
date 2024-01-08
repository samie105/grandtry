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
          <h2 className="text-sm font-bold text-white">John Doe</h2>
          <p className="text-sm text-white opacity-60">CEO, Acme Inc</p>
          <div className="flex mt-2">
            <span className="text-yellow-400">★★★★☆</span>
          </div>
          <p className="text-white mt-4">
            "This product is absolutely amazing. I can't imagine my life without
            it."
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6">
          <h2 className="text-sm font-bold text-white">Jane Smith</h2>
          <p className="text-sm text-white opacity-60">CTO, Beta Corp</p>
          <div className="flex mt-2">
            <span className="text-yellow-400">★★★★★</span>
          </div>
          <p className="text-white mt-4">
            "The team behind this product is the best. They've thought of
            everything."
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6">
          <h2 className="text-sm font-bold text-white">Bob Johnson</h2>
          <p className="text-sm text-white opacity-60">Founder, Gamma LLC</p>
          <div className="flex mt-2">
            <span className="text-yellow-400">★★★★☆</span>
          </div>
          <p className="text-white mt-4">
            "I've seen a lot of products in my time, and this one is by far the
            best."
          </p>
        </div>
      </div>
    </div>
  );
}
