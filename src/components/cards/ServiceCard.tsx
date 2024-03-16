import React from "react";
import { ChevronRight } from "lucide-react";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ServiceCard({ imageUrl, title, description }: IProps) {
  return (
    <div>
      <div className="-ml-10">
        <img src={imageUrl} alt="service image" />
      </div>
      <p className="text-darkBlue text-[20px] font-bold  md:max-w-[197px]">
        {title}
      </p>
      <p className="text-lightBlue text-[16px] font-bold my-[24px] md:max-w-[312px]">
        {description}
      </p>

      <div className="text-primary text-[16px] font-bold flex gap-4">
        Erfahren Sie mehr <ChevronRight />
      </div>
    </div>
  );
}

export default ServiceCard;
