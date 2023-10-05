import StandardItemCard from "@/common/ItemCards/StandardItemCard";
import type { ProductDataType } from "@/constants/data";

export default function SingleProduct({ item }: { item: ProductDataType }) {
  const realDiscount = item.price - item.price * item.discount;
  return (
    <li key={item.id} className="">
      <StandardItemCard
        productName={item.productName}
        productImg={item.productImg}
        discount={item.discount}
        desc={item.desc}
        realDiscount={realDiscount}
        price={item.price}
        points={item.points}
      />
    </li>
  );
}
