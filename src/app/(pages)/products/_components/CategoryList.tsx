import CategoryItem from "./CategoryItem";
import MembershipCard from "./MembershipCard";
import { CategoryData } from "@/constants/others";
import classes from "./CategoryList.module.css";

export default function CategoryList() {
  const item1 = CategoryData[0];
  const item2 = CategoryData[1];
  const item3 = CategoryData[2];

  return (
    <>
      <div
        className="grid grid-cols-3
      grid-rows-4 md:grid-cols-3 md:grid-rows-5 xl:grid-cols-5 xl:grid-rows-2 gap-1 ml-4 mr-40 my-16"
      >
        <MembershipCard className="row-span-1 col-span-1 md:row-span-2 md:col-span-3 ml-0 md:ml-32 2xl:ml-" />
        <CategoryItem
          item={item1 as any}
          className={`col-span-3 row-span-1 xl:row-span-2 xl:col-span-1 w-[23rem] sm:w-[30rem] md:w-full ml-0 md:ml-32  flex items-end  ${classes.device}`}
        />
        <CategoryItem
          item={item2 as any}
          className={`row-span-1 col-span-3 xl:col-span-1  flex items-end w-[23rem] sm:w-[30rem] md:w-full ml-0 md:ml-32  ${classes.pod}`}
        />
        <CategoryItem
          item={item3 as any}
          className={`row-span-1 col-span-3 xl:col-span-1  flex items-end w-[23rem] sm:w-[30rem] md:w-full ml-0 md:ml-32 ${classes.dispo}`}
        />
      </div>
    </>
  );
}
