import { useState } from "react";
import { Search, Book, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className={`z-50 w-full bg-gray-900 transition-all duration-300`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center">
              <Book className="h-8 w-8 text-indigo-400" />
              <Link to="/">
                <span className="ml-2 text-2xl font-bold text-white">
                  Readdora
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <div className="relative"></div>
            <a href="#" className="text-white hover:text-indigo-300">
              New Releases
            </a>
            <a href="#" className="text-white hover:text-indigo-300">
              Bestsellers
            </a>
            <a href="#" className="text-white hover:text-indigo-300">
              Deals
            </a>
          </div>

          {/* Search Bar */}
          <div className="mx-8 hidden max-w-md flex-1 md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for books, authors..."
                className="w-full rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute top-2 right-3">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-indigo-300 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-gray-800 md:hidden">
          <div className="space-y-2 px-4 pt-2 pb-4">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search for books, authors..."
                className="w-full rounded-full border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute top-2 right-3">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <a href="#" className="block py-2 font-medium text-gray-200">
              Categories
            </a>
            <a href="#" className="block py-2 text-gray-200">
              New Releases
            </a>
            <a href="#" className="block py-2 text-gray-200">
              Bestsellers
            </a>
            <a href="#" className="block py-2 text-gray-200">
              Deals
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
