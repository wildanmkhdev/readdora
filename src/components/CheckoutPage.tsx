import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import books from "../db/books.ts";

const CheckoutPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id || "", 10));

  if (!book) {
    return <div className="text-white">Buku tidak ditemukan.</div>;
  }

  const handleBuy = () => {
    alert(`Terima kasih telah membeli buku: ${book.title}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white">
      <div className="mx-auto max-w-md rounded-md bg-gray-800 p-4">
        <img
          src={book.coverImage}
          alt={book.title}
          className="h-64 w-full rounded object-cover"
        />
        <h2 className="mt-4 text-xl font-bold">{book.title}</h2>
        <p className="mt-2">
          Rating: <strong>{book.rating}</strong>
        </p>
        <p className="mt-2 text-lg font-semibold">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(book.price)}
        </p>
        <button
          onClick={handleBuy}
          className="mt-4 w-full rounded bg-yellow-500 px-4 py-2 font-bold text-black hover:bg-yellow-400"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
