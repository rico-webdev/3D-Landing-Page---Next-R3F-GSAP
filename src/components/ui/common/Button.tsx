"use client";

import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { clsx } from "clsx";

import { gsap, useGSAP, SplitText } from "@/plugins";
import { useRef } from "react";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

const Button = ({ buttonLink, buttonText, className }: Props) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  const { contextSafe } = useGSAP({ scope: buttonRef });

  const handleHover = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const type = e.type;

    const split = SplitText.create(target, {
      type: "chars",
      linesClass: "chars-btn",
    });

    gsap.to(split.chars, {
      fontWeight: type === "mouseenter" ? 900 : 400,
      stagger: { each: 0.04, from: "center" },
      ease: "power2.out",
    });
    gsap.to(target, {
      scale: type === "mouseenter" ? 0.9 : 1,
      ease: "power2.out",
    });
  });

  return (
    <PrismicNextLink
      ref={buttonRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={clsx(
        "bg-btn hover:bg-btn-hover rounded-full border-1 border-neutral-500 px-15 py-4 text-center text-lg tracking-wide text-white shadow-lg shadow-neutral-700 transition-shadow duration-300 ease-in-out hover:shadow-xs lg:text-xl",
        className,
      )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
};

export default Button;
