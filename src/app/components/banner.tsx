interface BannerProps {
  bannerText: string;
}

export default function Banner({ bannerText }: BannerProps) {
  return (
    <div className="bg-main_blue flex justify-center border-b-4 border-main_brown py-2 px-4">
      <p className="text-white underline text-xs md:text-md lg:text-lg">
        {bannerText}
      </p>
    </div>
  );
}
