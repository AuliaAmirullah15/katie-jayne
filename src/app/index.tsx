import Banner from "@/app/components/banner";
import EmailPopup from "@/app/components/emailPopup";
import Footer from "@/app/components/footer";
import FooterBanner from "@/app/components/footerBanner";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import ShopBanner from "@/app/components/shopBanner";
import Trending from "@/app/components/trending";

const IndexPage: React.FC = () => {
  return (
    <>
      <EmailPopup />
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />
      <Hero />
      <Trending />
      <ShopBanner />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default IndexPage;
