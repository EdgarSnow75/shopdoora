import SecondaryBtn from "../Buttons/SecondaryBtn";

export default function EmbeddedCategoryCard({
  flavorName,
  desc,
  className,
}: {
  flavorName: string;
  desc: string;
  className: string;
}) {
  return (
    <div
      className={`flex justify-end rounded-md text-white p-5 w-full ${className} p-10`}
    >
      <div className="flex flex-col text-center items-center z-10">
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">{desc}</h2>
        <h3 className="font-light text-xl lg:text-2xl mb-4">{flavorName}</h3>
        <SecondaryBtn>View</SecondaryBtn>
      </div>
    </div>
  );
}
