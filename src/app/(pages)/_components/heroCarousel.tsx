import Image from "next/image";

import arrow1 from "../../../../public/Misc/carousel-arrow.png";
import arrow2 from "../../../../public/Misc/carousel-arrow2.png";
import { useState } from "react";
import CarousalBtn from "@/common/Buttons/CarousalBtn";
import HeroImage from "./heroImage";

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(1);

  const goToSlide = (slideNumber: number) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="carousel w-full relative h-[50vh]">
      <div className="absolute flex justify-between left-5 right-5 top-[9.5rem] z-10">
        <CarousalBtn
          onClick={() => goToSlide(activeSlide === 1 ? 4 : activeSlide - 1)}
        >
          <Image
            src={arrow2}
            alt="arrow-reverse"
            width={25}
            className="relative top-[-0.5rem]"
          />
        </CarousalBtn>
        <CarousalBtn
          onClick={() => goToSlide(activeSlide === 4 ? 1 : activeSlide + 1)}
        >
          <Image
            src={arrow1}
            alt="arrow"
            width={25}
            className="relative top-[-0.5rem]"
          />
        </CarousalBtn>
      </div>
      <div className="absolute flex justify-center space-x-2 bottom-4 left-[44%] md:left-[47%] lg:left-[47.5%] xl:left-[48.5%] transform top-[102%] z-10 mb-6">
        {Array.from({ length: 4 }, (_, index) => (
          <button
            key={index}
            className={`w-[10px] h-[10px] rounded ${
              activeSlide === index + 1
                ? "active bg-black"
                : "bg-black opacity-40"
            }`}
            onClick={() => goToSlide(index + 1)}
          ></button>
        ))}
      </div>
      <HeroImage activeSlide={activeSlide} />
    </div>
  );
}
