"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ProductData } from "@/constants/data";
import { AiTwotoneStar } from "react-icons/ai";
import Arrow1 from "../../../public/Misc/carousel-arrow.png";
import CarousalBtn from "../Buttons/CarousalBtn";

export default function SideCategoryCard({
  categoryName,
  desc,
  className,
}: {
  categoryName: string;
  desc: string;
  className: string;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageWidth = 240;
  const numImages = ProductData.length;

  const maxScroll = () => {
    const numImages =
      document.getElementById("carousel")?.childElementCount || 0;
    return Math.max(0, (numImages - 1) * imageWidth);
  };

  const scrollRight = () => {
    const newScrollPosition = scrollPosition + imageWidth;
    // Ensure you don't scroll past the last image
    const maxPosition = maxScroll();
    setScrollPosition(Math.min(newScrollPosition, maxPosition));
  };

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
      carousel.style.width = `${numImages * imageWidth}px`; // Set the container width
    }
  }, [scrollPosition, numImages]);
  return (
    <div
      className={`flex flex-col md:flex-row justify-around rounded-md text-white bg-[#212529] ${className} py-5 h-[60vh]`}
    >
      <div className="flex items-center">
        <div className="flex flex-col items-start z-10 ml-48 mr-3">
          <h2 className="text-xl lg:text-3xl font-bold mb-4">{desc}</h2>
          <h3 className="font-light text-xl mb-4 w-[50%]">{categoryName}</h3>
        </div>
      </div>
      <div className="carousel">
        <ul
          id="carousel"
          style={{ transform: `translateX(-${scrollPosition}%)` }}
          className="grid grid-cols-2 gap-2 ml-12 mr-2  md:grid-cols-3 lg:flex lg:flex-column lg:flex-nowrap lg:justify-center lg:space-x-1 lg:flex-column xl:flex xl:justify-center xl:space-x-1"
        >
          {ProductData.map((item) => (
            <li key={item.id} className="carousel-item">
              <div className="card shadow-lg ring-[0.5px] ring-[rgba(0,0,0,0.2)] w-[12rem]  md:w-[10rem] md:h-[15rem] lg:h-[30rem] lg:w-[12rem] xl:w-[15rem] rounded-md">
                <figure>
                  <Image
                    src={item.productImg}
                    alt="Vape Product Showcase"
                    className=" border-b-2 w-36 h-44 md:w-40 md:h-40 lg:w-[240px] lg:h-[325px]"
                    width={225}
                    height={200}
                  />
                </figure>
                <div className="card-body p-1 lg:p-9 bg-[#EAEAEA] text-center max-h-[50%] md:max-h-[40%] pt-2 lg:pt-9 text-black">
                  <h2 className="text-center font-semibold">
                    {item.productName}
                  </h2>
                  <p className="font-semibold">{item.price} MMK</p>
                  <p className="text-yellow-500 flex align-middle justify-center">
                    <span className="mt-1 mr-1">
                      <AiTwotoneStar />
                    </span>
                    <span>{item.points} Points</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CarousalBtn
        className="relative right-[1%] top-[32%] translate-y-4 hidden xl:block"
        onClick={scrollRight}
      >
        <Image
          src={Arrow1}
          alt="arrow"
          width={25}
          className="relative top-[-0.5rem]"
        />
      </CarousalBtn>
    </div>
  );
}
