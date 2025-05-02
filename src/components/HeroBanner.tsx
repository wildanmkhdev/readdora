import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 px-6 py-24 text-white lg:px-24">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Welcome to BookVerse
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-2xl">
          Explore thousands of ebooks and enjoy a seamless reading experience in
          a beautifully designed digital library.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>
          <button className="rounded-2xl border border-white px-6 py-3 font-semibold transition hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
