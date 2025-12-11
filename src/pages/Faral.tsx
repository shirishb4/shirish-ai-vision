import { Helmet } from "react-helmet";
import FaralHeader from "@/components/faral/FaralHeader";
import FaralHero from "@/components/faral/FaralHero";
import FaralAbout from "@/components/faral/FaralAbout";
import FaralMenu from "@/components/faral/FaralMenu";
import WhyChooseUs from "@/components/faral/WhyChooseUs";
import FaralGallery from "@/components/faral/FaralGallery";
import FaralTestimonials from "@/components/faral/FaralTestimonials";
import OrderDelivery from "@/components/faral/OrderDelivery";
import FaralContact from "@/components/faral/FaralContact";
import FaralFooter from "@/components/faral/FaralFooter";

const Faral = () => {
  return (
    <>
      <Helmet>
        <title>घरची चव - Authentic Homemade Maharashtrian Diwali Faral 2026</title>
        <meta
          name="description"
          content="Order authentic homemade Maharashtrian Diwali faral - Chakli, Shankarpale, Karanji, Ladoo, Chivda & more. 100% homemade, fresh ingredients, no preservatives. Pre-book for Diwali 2026!"
        />
        <meta
          name="keywords"
          content="Diwali faral, Maharashtrian sweets, homemade faral, chakli, shankarpale, karanji, ladoo, chivda, Pune, Mumbai, traditional recipes"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <FaralHeader />
        <main>
          <FaralHero />
          <FaralAbout />
          <FaralMenu />
          <WhyChooseUs />
          <FaralGallery />
          <FaralTestimonials />
          <OrderDelivery />
          <FaralContact />
        </main>
        <FaralFooter />
      </div>
    </>
  );
};

export default Faral;
