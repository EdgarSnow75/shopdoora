import { ProductData } from "@/constants/data";
import NewProduct from "./NewProduct";
import PrimaryBtn from "@/common/Buttons/PrimaryBtn";

export default function NewProductList() {
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 ml-4 mr-2  md:grid-cols-3 lg:flex lg:flex-column lg:flex-wrap lg:justify-center lg:space-x-1 lg:flex-column xl:flex xl:justify-center xl:space-x-0">
        {ProductData.slice(0, 4).map((item) => (
          <NewProduct key={item.id} item={item as any} />
        ))}
      </ul>
      <div className="flex justify-center my-5">
        <PrimaryBtn className="px-36">View More {">"}</PrimaryBtn>
      </div>
    </>
  );
}
