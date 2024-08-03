"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
}

const ImageReveal = ({ src }: ImageRevealProps) => {
  const imageRef = useRef(null);
  const revealRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top bottom-=25%",
          end: "bottom center-=30%",
        },
      });
      tl.to(revealRef.current, {
        duration: 0.8,
        width: "0%",
        ease: "Power2.easeInOut",
      }).from(imageRef.current, 1.2, {
        duration: 1.1,
        scale: 1.6,
        ease: "Power2.easeInOut",
        delay: -1.2,
      });
    },
    { scope: revealRef }
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={revealRef}
        className="absolute inset-0 z-10 bg-background"
        style={{ width: "100%" }}
      >

      </div>
      <Image
        ref={imageRef}
        src={src}
        fill
        alt="Reveal"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
};

export default ImageReveal;
