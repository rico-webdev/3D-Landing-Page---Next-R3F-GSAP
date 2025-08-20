import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./global.css";

import fonts from "@/assets/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${fonts.alpino.variable}`}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
