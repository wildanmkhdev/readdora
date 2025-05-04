import Navbar from "./components/Navbar";
import SplashCursor from "../Reactbits/SplashCursor/SplashCursor";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import AllCategories from "./pages/all_categories";
import Footed from "./components/Footed";
import CheckoutPage from "./components/CheckoutPage";

export default function App() {
  return (
    <>
      <Navbar />
      <SplashCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all_categories" element={<AllCategories />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
      </Routes>
      <Footed></Footed>
    </>
  );
}
