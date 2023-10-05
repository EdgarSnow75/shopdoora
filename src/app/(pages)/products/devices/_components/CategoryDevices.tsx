import { CategoryData } from "@/constants/others";
import classes from "./CategoryDevices.module.css";
import SideCategoryCard from "@/common/CategoryCards/SideCategoryCard";

export default function CategoryDevice({ className }: { className?: string }) {
  const item = CategoryData[0];
  return (
    <div className="flex justify-center">
      <div className={` ring-2 my-5 w-[80%] ${className}`}>
        <SideCategoryCard
          className={classes.bgImg}
          categoryName={item.categoryName}
          desc={item.desc}
        />
      </div>
    </div>
  );
}
