import Image from "next/image";

export default function EmbeddedItemCard({
  productName,
  productImg,
  desc,
  discount,
  price,
  points,
}: {
  productName: string;
  productImg: string;
  desc: string;
  discount: number;
  price: number;
  points: number;
}) {
  return (
    <div className="card card-side shadow-lg flex-row flex-wrap align-middle md:align-bottom place-items-end justify-center lg:justify-start justify-items-end ring-[0.5px] ring-[rgba(0,0,0,0.2)] w-[12rem]  md:w-[14rem] md:h-[30rem] lg:h-[20rem] lg:w-[25rem]">
      <div className="card-body  p-5 pt-2 md:p-9 md:pt-9 items-center md:items-start">
        <h2 className="text-left font-semibold">{productName}</h2>
        <h2 className="text-left font-semibold">{desc}</h2>
        <p className="font-light">{price} MMK</p>
      </div>
      <div>
        <figure>
          <Image
            src={productImg}
            alt="Vape Product Showcase"
            className="w-[10rem]"
            width={400}
            height={200}
          />
        </figure>
      </div>
    </div>
  );
}
