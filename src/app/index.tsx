import Banner from "@/app/components/header/banner";
import EmailPopup from "@/app/components/email/emailPopup";
import Footer from "@/app/components/footer/footer";
import FooterBanner from "@/app/components/footer/footerBanner";
import Header from "@/app/components/header/header";
import Hero from "@/app/components/index/hero";
import ShopBanner from "@/app/components/index/shopBanner";
import Trending from "@/app/components/index/trending";

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
