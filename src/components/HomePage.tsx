// src/pages/HomePage.tsx
import CategoryPage from "./CategoryBook";
import HeroBanner from "./HeroBanner";
import PopularBooks from "./PageBook";
import TestimonialPage from "./Testimoni";
import Suggest from "./Suggest";
import Contacts from "./Contact";
import View from "./View";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <PopularBooks />
      <CategoryPage />
      <View />
      <TestimonialPage />
      <Suggest />
      <Contacts />
      <hr className="text-white" />
    </div>
  );
};

export default HomePage;
