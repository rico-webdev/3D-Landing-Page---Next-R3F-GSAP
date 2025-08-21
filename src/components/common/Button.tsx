import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { clsx } from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

const Button = ({ buttonLink, buttonText, className }: Props) => {
  return (
    <PrismicNextLink
      className={clsx(
        "rounded-xl border-1 border-neutral-500 bg-[#A44A3F] px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase shadow-lg shadow-neutral-700 transition-[color,box-shadow] duration-300 hover:bg-[#843D33] hover:shadow-xs md:text-2xl",
        className,
      )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
};

export default Button;
