import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./global.css";
import fonts from "@/fonts";

import Header from "@/components/layout/Header";
import ViewCanvas from "@/components/ui/canvas/ViewCanvas";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${fonts.alpino.variable} bg-crayola overflow-x-hidden`}
      >
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
