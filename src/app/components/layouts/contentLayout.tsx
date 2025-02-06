import { ReactNode, HTMLAttributes } from "react";

interface ContentLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function ContentLayout({
  children,
  ...props
}: ContentLayoutProps) {
  return (
    <div {...props} className="pt-[var(--header-height)]">
      {children}
    </div>
  );
}
