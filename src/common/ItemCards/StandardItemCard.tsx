import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";

export default function StandardItemCard({
  productName,
  productImg,
  desc,
  discount,
  price,
  realDiscount,
  points,
}: {
  productName: string;
  productImg: string;
  desc: string;
  discount: number;
  price: number;
  realDiscount: number;
  points: number;
}) {
  return (
    <div className="card glass shadow-lg ring-[0.5px] ring-[rgba(0,0,0,0.2)] w-[10rem] h-[25rem]  md:w-[14rem] md:h-[30rem] lg:h-[30rem] lg:w-[15rem]">
      <figure>
        <div className="absolute top-0 md:left-[27%] lg:left-[30%] bg-red-700 px-5 text-white rounded-b-lg">
          {discount * 100} % Off
        </div>
        <Image
          src={productImg}
          alt="Vape Product Showcase"
          className="rounded-md border-b-2 w-24 h-30 md:w-64 md:h-72 lg:w-[170px] lg:h-[345px]"
          width={175}
          height={200}
        />
      </figure>
      <div className="card-body bg-[#EAEAEA] text-center max-h-[60%] md:max-h-[40%] p-5 pt-2 md:p-9 md:pt-9">
        <h2 className="text-center font-semibold">{productName}</h2>
        <p className="font-semibold text-sm lg:text-base">{realDiscount} MMK</p>
        <p className="line-through text-sm lg:text-base">{price} MMK</p>
        <p className="text-yellow-500 flex align-middle justify-center">
          <span className="mt-1 mr-1">
            <AiTwotoneStar />
          </span>
          <span className=" text-sm lg:text-base">{points} Points</span>
        </p>
      </div>
    </div>
  );
}
