import { ChevronRight } from "lucide-react";
import React from "react";

interface IProps {
  title: string;
  description: string;
}

function InfoCard({ title, description }: IProps) {
  return (
    <div className="">
      <p className="text-darkBlue text-[20px] font-bold  md:max-w-[197px]">
        {title}
      </p>
      <p className="text-lightBlue text-[16px] font-bold my-[24px] md:max-w-[361px]">
        {description}
      </p>

      <div className="text-primary text-[16px] font-bold flex gap-4">
        Lesen Sie weiter <ChevronRight />
      </div>
    </div>
  );
}

export default InfoCard;
