interface BannerProps {
  bannerText: string;
}

export default function Banner({ bannerText }: BannerProps) {
  return (
    <div className="bg-main_blue flex justify-center border-b-4 border-main_brown py-2">
      <p className="text-white underline">{bannerText}</p>
    </div>
  );
}
