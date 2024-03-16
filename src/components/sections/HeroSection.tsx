import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="pt-32 px-4 md:px-[10rem] md:pt-16 flex flex-col gap-8 md:flex-row justify-between items-center bg-white">
      <div className="">
        <p className="text-lightBlue font-bold uppercase">
          Ingenieur Dieter Weiss
        </p>
        <p className="text-darkBlue font-bold my-4 text-[32px]">
          Ingenieurbüro für Bau- und Vermessungswesen
        </p>
        <p className="text-lightBlue text-[18px] font-medium mb-[38px]">
          Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter
          Weiss ist Garant für den Er­folg Ihrer Projekte.
        </p>
        <MainButton
          text="Ihr Projekt mit uns"
          rightIconRoute="/images/right_icon.png"
          classes="font-bold text-[16px]"
        />
      </div>
      <div className="md:-mb-32 relative">
        <img src="/images/hero.png" alt="hero image" />

        <div className="absolute top-5 left-5 cursor-pointer">
          <img src="/images/hero_icon.png" alt="hero icon" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
