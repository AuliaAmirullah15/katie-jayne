export default function LinkSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; anchor: string }[];
}) {
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
}
