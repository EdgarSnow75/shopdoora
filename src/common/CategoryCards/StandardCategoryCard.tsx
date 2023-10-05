export default function StandardCategoryCard({
  categoryName,
  className,
  desc,
}: {
  categoryName: string;
  className?: string;
  desc: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-md bg-[#212529] bg-opacity-70 text-white p-5 ${className} w-full`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col z-10">
          <h2 className="text-2xl">{categoryName}</h2>
          <p className="font-light">{desc}</p>
        </div>
        <div className="z-10 mr-2">{">"}</div>
      </div>
    </div>
  );
}
