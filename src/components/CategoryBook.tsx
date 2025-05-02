import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    {
      name: "Fiction",
      img: "https://i.pinimg.com/736x/50/aa/55/50aa55edd04a3096c10ec61cd0496e7d.jpg",
      count: "320 books",
    },
    {
      name: "Non-Fiction",
      img: "https://i.pinimg.com/736x/aa/36/76/aa36763b11782f44ac990be57977e540.jpg",
      count: "245 books",
    },
    {
      name: "Education",
      img: "https://i.pinimg.com/736x/87/8d/3b/878d3b86d73a524727e80b85250d677e.jpg",
      count: "189 books",
    },
    {
      name: "Technology",
      img: "https://i.pinimg.com/736x/12/c3/ff/12c3ff6753c6760a42266a0129aa0fd3.jpg",
      count: "156 books",
    },
    {
      name: "Science",
      img: "https://i.pinimg.com/736x/54/00/5c/54005c3cf5b59c112d4063f65f8b1703.jpg",
      count: "203 books",
    },
    {
      name: "History",
      img: "https://i.pinimg.com/736x/0c/da/5d/0cda5dfd800186df464653691b5d75a9.jpg",
      count: "142 books",
    },
    {
      name: "Biography",
      img: "https://i.pinimg.com/736x/b4/d8/96/b4d8961b110643ff748a0fbd471b540b.jpg",
      count: "98 books",
    },
    {
      name: "Fantasy",
      img: "https://i.pinimg.com/736x/b3/0f/b3/b30fb38ed1b71cc2feb2da6699c6770a.jpg",
      count: "175 books",
    },
    {
      name: "Romance",
      img: "https://i.pinimg.com/736x/b9/51/44/b95144e212355e9f9ed6e31274a533b2.jpg",
      count: "210 books",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 px-4 py-16 text-white md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-center text-3xl font-bold md:text-left lg:text-4xl">
            Discover Books by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Category
            </span>
          </h2>

          {/* Navigation buttons for larger screens */}
          <div className="hidden space-x-4 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex space-x-5 pb-8 md:pb-4"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-72"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
                  <img
                    src={category.img}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover effect - pulsing circle */}
                  <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white opacity-0 transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:opacity-10"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 w-full p-5 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{category.count}</p>

                  {/* Animated underline */}
                  <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile navigation buttons */}
          <div className="mt-4 flex justify-center space-x-4 md:hidden">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
