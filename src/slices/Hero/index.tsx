import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/layout/Bounded";
import Button from "@/components/common/Button";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      className="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-heading text-7xl leading-[.8] font-bold text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
              {asText(slice.primary.heading)}
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
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
          <h2 className="text-side-heading lg:text8xl text-6xl font-black text-balance text-sky-950 uppercase">
            {asText(slice.primary.second_heading)}
          </h2>
          <div className="text-side-body mt-4 max-w-xl text-xl font-normal text-sky-950">
            <PrismicRichText field={slice.primary.second_body} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
