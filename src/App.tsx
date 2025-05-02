// src/App.tsx
import CategoryPage from "./components/CategoryBook";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import PopularBooks from "./components/PageBook";
import TestimonialPage from "./components/Testimoni";
import "./index.css";
import Suggest from "./components/Suggest";
import Contacts from "./components/Contact";
import Footed from "./components/Footed";
import SplashCursor from "../Reactbits/SplashCursor/SplashCursor";

import View from "./components/View";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SplashCursor />
      <HeroBanner></HeroBanner>

      <PopularBooks></PopularBooks>
      <CategoryPage></CategoryPage>
      <View></View>
      <TestimonialPage></TestimonialPage>
      <Suggest></Suggest>
      <Contacts></Contacts>
      <hr className="text-white" />

      <Footed></Footed>
    </div>
  );
}
