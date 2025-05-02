import React from "react";
import { Link } from "react-router-dom"; // Untuk routing ke halaman Lihat Semua

const PopularBooks: React.FC = () => {
  const books = [
    {
      title: "The Great Adventure",
      author: "John Doe",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Mystery of the Deep",
      author: "Jane Smith",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "The World Beyond",
      author: "Michael Brown",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Unseen Realms",
      author: "Emily White",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Future of Tomorrow",
      author: "Robert Black",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 px-6 py-16 text-white lg:px-24">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-center text-3xl font-bold lg:text-4xl">
            Popular Books
          </h2>
          {/* Tombol Lihat Semua */}
          <Link
            to="/popular-books" // Ganti dengan path halaman Lihat Semua
            className="text-lg text-blue-400 hover:text-blue-300"
          >
            See All
          </Link>
        </div>

        {/* Scrollable Books */}
        <div className="hide-scrollbar cursor-grab overflow-x-auto">
          <div className="flex space-x-6 lg:space-x-12">
            {books.map((book, index) => (
              <div
                key={index}
                className="group relative w-60 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Gambar dengan efek hover */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay saat hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
                </div>

                {/* Konten */}
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <h3 className="truncate text-lg font-semibold text-gray-100">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-400">{book.author}</p>

                  {/* Animated underline */}
                  <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
