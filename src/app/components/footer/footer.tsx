"use client";
import Image from "next/image";
import logo2 from "@/assets/images/svg/logo2.svg";
import LinkSection from "./linkSection";
import EmailSection from "./emailSection";
import { linkItems } from "@/data/footerLinks";

const FooterContent = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row md:space-x-9 gap-10">
      <div className="basis-2/3 grow flex flex-col md:flex-row md:space-x-12 lg:space-x-24 space-y-12 md:space-y-0">
        {linkItems.map((linkItem) => (
          <LinkSection
            key={linkItem.title}
            title={linkItem.title}
            links={linkItem.links}
          />
        ))}
      </div>
      <div className="basis-1/3 grow">
        <EmailSection />
      </div>
    </div>
  );
};
export default function Footer() {
  return (
    <div className="bg-bg_brown px-6 md:px-12 py-6">
      <Image src={logo2} alt="Katie Jayne" className="w-6 md:w-auto mb-6" />
      <FooterContent />
      <div className="my-6">
        &copy; 2025, <span className="underline">Katie Jayne Ltd</span>
      </div>
    </div>
  );
}
