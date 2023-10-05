import SecondaryBtn from "@/common/Buttons/SecondaryBtn";
import { MembershipDealsData } from "@/constants/others";
import classes from "./MembershipCard.module.css";

export default function MembershipCard({ className }: { className?: string }) {
  const defaultMembership = MembershipDealsData[0];
  return (
    <div
      className={`flex items-end w-[23rem] md:w-full xl:w-[40rem] 2xl:w-[54rem] h-[25rem] rounded-md p-5 ${classes.container} ${className}`}
    >
      <div className="flex flex-col max-w-[60%] items-start">
        <h1 className="text-4xl xl:text-5xl text-white">Membership Program</h1>
        <p className="text-xl text-white mb-3">{defaultMembership.desc}</p>
        <SecondaryBtn>View</SecondaryBtn>
      </div>
    </div>
  );
}
