import Image from "next/image";
import bg1 from "../../../../public/Hero Background/bg-9.jpg";
import bg2 from "../../../../public/Hero Background/bg-2.jpg";
import bg3 from "../../../../public/Hero Background/bg-6.jpg";
import bg4 from "../../../../public/Hero Background/bg-4.jpg";
import { HeroData } from "@/constants/data";
import SecondaryBtn from "@/common/Buttons/SecondaryBtn";

export default function HeroImage({ activeSlide }: { activeSlide: number }) {
  const HeroDataItem = HeroData[activeSlide - 1];
  return (
    <>
      {activeSlide === 1 && (
        <div id="slide1" className="carousel-item relative w-full active">
          <Image
            src={bg4}
            width={1900}
            height={477}
            alt=""
            className="w-full"
          />
          <div className="text-center text-white absolute bottom-4 left-[25%] transform top-[50%] z-10 w-[50%]">
            <h3 className="lg:text-xl font-light mb-4">{HeroDataItem.trait}</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              {HeroDataItem.title}
            </h1>
            <h3 className="lg:text-xl font-light mb-4">
              Starting from {HeroDataItem.price}MMK
            </h3>
            <SecondaryBtn>View</SecondaryBtn>
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div id="slide2" className="carousel-item relative w-full active">
          <Image
            src={bg1}
            width={1900}
            height={477}
            alt=""
            className="w-full"
          />
          <div className="text-center text-white absolute bottom-4 left-[25%] transform top-[50%] z-10 w-[50%]">
            <h3 className="lg:text-xl font-light mb-4">{HeroDataItem.trait}</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              {HeroDataItem.title}
            </h1>
            <h3 className="lg:text-xl font-light mb-4">
              Starting from {HeroDataItem.price}MMK
            </h3>
            <SecondaryBtn>View</SecondaryBtn>
          </div>
        </div>
      )}

      {activeSlide === 3 && (
        <div id="slide3" className="carousel-item relative w-full active">
          <Image
            src={bg2}
            width={1900}
            height={477}
            alt=""
            className="w-full"
          />
          <div className="text-center text-white absolute bottom-4 left-[25%] transform top-[50%] z-10 w-[50%]">
            <h3 className="lg:text-xl font-light mb-4">{HeroDataItem.trait}</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              {HeroDataItem.title}
            </h1>
            <h3 className="lg:text-xl font-light mb-4">
              Starting from {HeroDataItem.price}MMK
            </h3>
            <SecondaryBtn>View</SecondaryBtn>
          </div>
        </div>
      )}

      {activeSlide === 4 && (
        <div id="slide4" className="carousel-item relative w-full active">
          <Image
            src={bg3}
            width={1900}
            height={477}
            alt=""
            className="w-full"
          />
          <div className="text-center text-white absolute bottom-4 left-[25%] transform top-[50%] z-10 w-[50%]">
            <h3 className="lg:text-xl font-light mb-4">{HeroDataItem.trait}</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              {HeroDataItem.title}
            </h1>
            <h3 className="lg:text-xl font-light mb-4">
              Starting from {HeroDataItem.price}MMK
            </h3>
            <SecondaryBtn>View</SecondaryBtn>
          </div>
        </div>
      )}
    </>
  );
}
