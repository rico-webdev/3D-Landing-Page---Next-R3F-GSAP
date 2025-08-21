import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText };
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
