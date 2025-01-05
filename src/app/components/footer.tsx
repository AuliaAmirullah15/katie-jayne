import Image from "next/image";
import logo2 from "@/assets/images/svg/logo2.svg";
import PrimaryButton, { ButtonType } from "./buttons/primaryButton";
import EmailInput from "./inputs/emailInput";

const LinkSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; anchor: string }[];
}) => {
  return (
    <div>
      <h2 className="mb-4 text-main_brown text-lg font-cardo">{title}</h2>
      <nav>
        <ul className="flex flex-col space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.anchor} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const EmailSection = () => {
  return (
    <>
      <h2 className="text-xl lg:text-2xl text-main_brown font-cardo mb-4">
        Sign up to our newsletter
      </h2>
      <EmailInput />
      <p>
        By signing up, you agree to our{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>
        .
      </p>
      <PrimaryButton
        title="Sign up"
        className="mt-2"
        type={ButtonType.Secondary}
      />
    </>
  );
};

const linkItems = [
  {
    title: "Follow",
    links: [
      {
        label: "Instagram",
        anchor: "https://www.instagram.com",
      },
      {
        label: "Facebook",
        anchor: "https://www.facebook.com",
      },
      {
        label: "X",
        anchor: "https://twitter.com",
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        label: "Start a Return",
        anchor: "#",
      },
      {
        label: "Return Policy",
        anchor: "#",
      },
      {
        label: "FAQ",
        anchor: "#",
      },
      {
        label: "Catalogs and Mailers",
        anchor: "#",
      },
      {
        label: "About Group Gifting",
        anchor: "#",
      },
      {
        label: "Contact Us",
        anchor: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        anchor: "#",
      },
      {
        label: "Sustainability",
        anchor: "#",
      },
      {
        label: "Careers",
        anchor: "#",
      },
      {
        label: "Cookie Policy",
        anchor: "#",
      },
      {
        label: "Privacy Policy",
        anchor: "#",
      },
      {
        label: "Terms",
        anchor: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-bg_brown px-6 md:px-12 py-6">
      <Image src={logo2} alt="Katie Jayne" className="w-6 md:w-auto mb-6" />
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
      <div className="my-6">
        &copy; 2024, <span className="underline">Katie Jayne Ltd</span>
      </div>
    </div>
  );
}
