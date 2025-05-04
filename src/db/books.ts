// Definisi interface untuk tipe data buku
export interface Book {
  id: number;
  title: string;
  rating: number;
  price: number;
  coverImage: string;
  purchaseUrl: string;
}

// Data buku dalam bentuk array of objects
const books: Book[] = [
  {
    id: 1,
    title: "Psycology Of Money",
    rating: 4.5,
    price: 29.99,
    coverImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gramedia.com%2Fproducts%2Fthe-psychology-money-edisi-revisi&psig=AOvVaw3YnvklnfnZoo2lE3Vbxslp&ust=1746448452379000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPjp0c7piY0DFQAAAAAdAAAAABAE", // Ganti dengan path gambar sebenarnya
    purchaseUrl: "https://example.com/book1",
  },
  {
    id: 2,
    title: "User Experience Fundamentals",
    rating: 5.0,
    price: 34.99,
    coverImage: "/path/to/book2.jpg", // Ganti dengan path gambar sebenarnya
    purchaseUrl: "https://example.com/book2",
  },
  {
    id: 3,
    title: "Design Systems Handbook",
    rating: 4.2,
    price: 27.5,
    coverImage: "/path/to/book3.jpg", // Ganti dengan path gambar sebenarnya
    purchaseUrl: "https://example.com/book3",
  },
  {
    id: 4,
    title: "Digital Typography",
    rating: 4.8,
    price: 19.99,
    coverImage: "/path/to/book4.jpg", // Ganti dengan path gambar sebenarnya
    purchaseUrl: "https://example.com/book4",
  },
  {
    id: 5,
    title: "Color Theory in Practice",
    rating: 4.6,
    price: 24.99,
    coverImage: "/path/to/book5.jpg", // Ganti dengan path gambar sebenarnya
    purchaseUrl: "https://example.com/book5",
  },
];

export default books;
