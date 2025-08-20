import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./global.css";
import fonts from "@/fonts";

import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${fonts.alpino.variable} overflow-x-hidden bg-yellow-300`}
      >
        <Header />
        <main>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
