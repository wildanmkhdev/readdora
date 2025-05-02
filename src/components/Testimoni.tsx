import React from "react";

const TestimonialPage: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Toko buku ini memiliki koleksi buku yang luar biasa. Saya suka menjelajah dan menemukan bacaan yang menarik!",
    },
    {
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Pilihan bukunya fantastis! Pelayanan pelanggan yang hebat dan navigasi situs yang mudah.",
    },
    {
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Saya telah menemukan beberapa buku favorit saya di sini, dan pengirimannya sangat cepat. Sangat merekomendasikan!",
    },
    {
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Tempat yang luar biasa untuk berbelanja buku! Saya suka variasi dan rekomendasi yang mereka tawarkan.",
    },
  ];

  return (
    <section className="bg-gray-900 px-6 py-16 text-white lg:px-24">
      <h2 className="sm:text-1xl mb-8 text-center text-2xl font-bold lg:text-4xl">
        What`s Costumer Say ?
      </h2>
      <div className="overflow-hidden">
        <div className="animate-marquee flex space-x-6">
          {/* Kontainer pertama untuk kartu */}
          <div className="flex space-x-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800 p-4 shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto h-16 w-16 rounded-full"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="mt-2 text-gray-300 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Kontainer duplikat untuk scrolling tak terbatas */}
          <div className="flex space-x-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800 p-4 shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto h-16 w-16 rounded-full"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="mt-2 text-gray-300 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
