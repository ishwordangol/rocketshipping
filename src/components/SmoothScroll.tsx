import { useEffect, ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

declare const window: any;

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const loadScrollSmoother = async () => {
      if (typeof window !== "undefined") {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/ScrollSmoother.min.js";
        script.onload = () => {
          const ScrollSmoother = window.ScrollSmoother;
          gsap.registerPlugin(ScrollSmoother);
          ScrollTrigger.normalizeScroll(true);

          ScrollSmoother.create({
            content: ".smoothscroller",
            smooth: 2,
            effects: true,
            normalizeScroll: true,
          });
        };
        document.body.appendChild(script);
      }
    };

    loadScrollSmoother();
  }, []);

  return <div className="smoothscroller">{children}</div>;
};

export default SmoothScroll;
