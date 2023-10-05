import StandardCategoryCard from "@/common/CategoryCards/StandardCategoryCard";
import type { CategoryDataType } from "@/constants/others";

export default function CategoryItem({
  item,
  className,
}: {
  item: CategoryDataType;
  className: string;
}) {
  return (
    <div className={className}>
      <StandardCategoryCard categoryName={item.categoryName} desc={item.desc} />
    </div>
  );
}
