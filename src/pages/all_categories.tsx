import React from "react";
import { Star } from "lucide-react";
import books from "../db/books.ts";

// Interface untuk tipe data buku
interface Book {
  id: number;
  title: string;
  rating: number;
  price: number;
  coverImage: string;
  purchaseUrl: string;
}

// Props untuk komponen kartu buku individu
interface BookCardProps {
  book: Book;
}

// Komponen untuk menampilkan kartu buku individual
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={12}
          className="fill-yellow-400 text-yellow-400"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={12} className="text-yellow-400" />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={12} className="text-gray-400" />,
      );
    }

    return stars;
  };

  return (
    <div className="w-full overflow-hidden rounded-md bg-gray-800 p-2 shadow-md transition-all hover:shadow-lg">
      <div className="aspect-[3/4] overflow-hidden rounded">
        <img
          src={book.coverImage}
          alt={`${book.title} Cover`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-2 text-xs">
        <h2 className="truncate font-semibold text-white">{book.title}</h2>
        <div className="mt-1 flex items-center gap-1">
          {renderStars(book.rating)}
          <span className="text-[10px] text-gray-300">{book.rating}</span>
        </div>
        <div className="mt-1 text-sm font-bold text-white">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(book.price)}
        </div>
      </div>
    </div>
  );
};

// Komponen utama koleksi buku
const BookCardCollection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="mb-4 text-xl font-bold text-white">Koleksi Buku</h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-2 sm:gap-3 md:gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCardCollection;
