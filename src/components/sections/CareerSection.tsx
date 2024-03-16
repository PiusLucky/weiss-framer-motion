import React from "react";
import MainButton from "../common/MainButton";

function CareerSection() {
  return (
    <section className="md:mt-[-13rem] pt-32 px-4 md:px-[10rem] md:pt-16 flex flex-col gap-8 md:flex-row justify-between items-end ">
      <div className="">
        <p className="text-lightBlue font-bold uppercase">
          Mach Karriere bei uns
        </p>
        <p className="text-darkBlue font-bold my-4 text-[32px]">
          Bewirb dich bei uns
        </p>
        <p className="text-lightBlue text-[18px] font-medium mb-[38px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <MainButton
          text="Karriere"
          rightIconRoute="/images/right_icon.png"
          classes="font-bold text-[16px]"
        />
      </div>
      <div className="">
        <img src="/images/c_1.png" alt="career image" />
      </div>
    </section>
  );
}

export default CareerSection;
