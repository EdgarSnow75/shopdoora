import EmbeddedCategoryCard from "@/common/CategoryCards/EmbeddedCategoryCard";
import type { NewFlavoursType } from "@/constants/others";

export default function NewFlavour({
  item,
  className,
}: {
  item: NewFlavoursType;
  className: string;
}) {
  return (
    <div>
      <EmbeddedCategoryCard
        flavorName={item.flavorName}
        desc={item.desc}
        className={className}
      />
    </div>
  );
}
