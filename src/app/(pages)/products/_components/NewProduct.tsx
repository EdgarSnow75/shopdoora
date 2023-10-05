import EmbeddedItemCard from "@/common/ItemCards/EmbeddedItemCard";
import type { ProductDataType } from "@/constants/data";

export default function NewProduct({ item }: { item: ProductDataType }) {
  return (
    <li key={item.id} className="">
      <EmbeddedItemCard
        productName={item.productName}
        productImg={item.productImg}
        discount={item.discount}
        desc={item.desc}
        price={item.price}
        points={item.points}
      />
    </li>
  );
}
