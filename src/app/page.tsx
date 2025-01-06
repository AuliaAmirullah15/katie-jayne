// import EmailPopup from "./components/emailPopup";
import MailChimp from "./components/email/mailChimp";
import Banner from "./components/banner";
import Header from "./components/header";
import Hero from "./components/hero";
import Trending from "./components/trending";
import ShopBanner from "./components/shopBanner";
import FooterBanner from "./components/footerBanner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {/* <EmailPopup /> */}
      <MailChimp />
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />
      <Hero />
      <Trending />
      <ShopBanner />
      <FooterBanner />
      <Footer />
    </>
  );
}
