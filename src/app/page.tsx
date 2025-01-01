import Banner from "./components/banner";
import Header from "./components/header";
import Hero from "./components/hero";
import Trending from "./components/trending";

export default function Home() {
  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />
      <Hero />
      <Trending />
    </>
  );
}
