import Header from "@/components/shop/Header";
import HeroBanner from "@/components/shop/HeroBanner";
import Categories from "@/components/shop/Categories";
import FeaturedProducts from "@/components/shop/FeaturedProducts";
import PromoSection from "@/components/shop/PromoSection";
import Newsletter from "@/components/shop/Newsletter";
import ShopFooter from "@/components/shop/ShopFooter";
import ChatBot from "@/components/shop/ChatBot";
import { Helmet } from "react-helmet";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>ShopHub - Your One-Stop Shopping Destination</title>
        <meta
          name="description"
          content="Discover amazing deals on fashion, electronics, accessories, and more. Shop the latest trends with free shipping on orders over $50."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroBanner />
          <Categories />
          <FeaturedProducts />
          <PromoSection />
          <Newsletter />
        </main>
        <ShopFooter />
        <ChatBot />
      </div>
    </>
  );
};

export default Shop;
