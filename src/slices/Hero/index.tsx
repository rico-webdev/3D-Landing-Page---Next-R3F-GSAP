"use client";

import { FC, useRef, useEffect } from "react";
import { asText, Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/layout/Bounded";
import Button from "@/components/common/Button";

import useHeroAnimations from "./animations/useHeroAnimaitons";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { initTl, scrollTl } = useHeroAnimations(container);

  const heading = asText(slice.primary.heading);
  const words = heading.split(" ");

  useEffect(() => {
    initTl.current?.play();
  }, [initTl, scrollTl]);

  return (
    <Bounded
      ref={container}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div className="bg-sunset absolute top-0 -z-50 aspect-square w-[200%] -translate-y-[75%] rounded-full"></div> */}

      <div className="hero grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-heading text-sunset overflow-hidden text-[20vw] leading-[.8] font-black uppercase md:text-[9rem] lg:text-[13rem]">
              <>
                {words[0]} <br />
                {words[1]}
              </>
            </h1>

            <div className="hero-subheading mt-15 text-lg font-semibold text-sky-950 lg:text-xl">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body text-base font-normal text-sky-950 lg:text-lg">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button
              className="hero-btn mt-12"
              buttonLink={slice.primary.button_link}
              buttonText={slice.primary.button_text}
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <PrismicImage
            className="w-full md:hidden"
            field={slice.primary.cans}
          />
          <div>
            <h2 className="text-side-heading text-2xl font-black text-balance text-sky-950 uppercase lg:text-2xl">
              {asText(slice.primary.second_heading)}
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-lg font-normal text-sky-950">
              <PrismicRichText field={slice.primary.second_body} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
