import localFont from "next/font/local";

const alpino = localFont({
  src: "./Alpino-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

const fonts = {
  alpino,
};

export default fonts;
export type Fonts = typeof fonts;
