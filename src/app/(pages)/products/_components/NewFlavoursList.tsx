"use client";
import CarousalBtn from "@/common/Buttons/CarousalBtn";
import Image from "next/image";
import Arrow1 from "../../../../../public/Misc/carousel-arrow.png";
import { NewFlavorsData } from "@/constants/others";
import NewFlavour from "./NewFlavor";
import classes from "./NewFlavorsList.module.css";
import { useState } from "react";

export default function NewFlavorList() {
  const item1 = NewFlavorsData[0];
  const item2 = NewFlavorsData[1];
  const item3 = NewFlavorsData[2];

  const [scrollPosition, setScrollPosition] = useState(0);

  // Define a function to handle carousel scrolling
  const handleScroll = () => {
    const itemWidth = 90; // 90% of the width
    const newPosition = scrollPosition + itemWidth;
    setScrollPosition(newPosition);
  };

  return (
    <div className="flex justify-end my-10">
      <div className="carousel space-x-4 rounded-box ml-10 w-[90%]">
        <div className="carousel-item w-[90%] flex-col">
          <NewFlavour item={item1 as any} className={classes.first} />
        </div>
        <div className="carousel-item w-[90%] flex-col">
          <NewFlavour item={item2 as any} className={classes.second} />
        </div>
        <div className="carousel-item w-[100%] flex-col">
          <NewFlavour item={item3 as any} className={classes.third} />
        </div>
      </div>
      <CarousalBtn
        className="absolute right-[2%] top-[243%] hidden xl:block"
        onClick={handleScroll}
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
