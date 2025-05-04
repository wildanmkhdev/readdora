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
    price: 45000, // Rp45.000
    coverImage:
      "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2024/1/20/qvjtc65vbzmexfegzrgs7u.jpg",
    purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
  },
  {
    id: 2,
    title: "Sebuah seni untuk bersikap bodo amat",
    rating: 5.0,
    price: 60000, // Rp60.000
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg",
    purchaseUrl: "https://example.com/book2",
  },
  {
    id: 3,
    title: "Attomic habits",
    rating: 4.2,
    price: 50000, // Rp50.000
    coverImage:
      "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg",
    purchaseUrl: "https://example.com/book3",
  },
  {
    id: 4,
    title: "Digital Typography",
    rating: 4.8,
    price: 40000, // Rp40.000
    coverImage:
      "https://www.gramedia.com/blog/content/images/2024/01/attitude-is-everything.jpg",
    purchaseUrl: "https://example.com/book4",
  },
  {
    id: 5,
    title: "Color Theory in Practice",
    rating: 4.6,
    price: 42000, // Rp42.000
    coverImage:
      "https://i0.wp.com/agosbookstore.com/wp-content/uploads/2024/01/cbdbe742-caac-408f-beb2-4ef750b81332.png?fit=500%2C743&ssl=1",
    purchaseUrl: "https://example.com/book5",
  },
];

export default books;
