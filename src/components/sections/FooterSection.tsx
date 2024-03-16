import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="bg-darkBlue py-[64px] px-4 md:px-[10rem] mt-8 md:mt-[116px]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <div className="flex-grow flex flex-col md:flex-row justify-end gap-8 md:gap-16">
          <div>
            <p className="text-[18px] font-bold text-white uppercase">
              Geschäftsführer
            </p>
            <p className="text-[16px] font-medium text-white">
              Beratender Ingenieur Dipl.-Ing. Klaus Weiss
            </p>
          </div>
          <div>
            <p className="text-[18px] font-bold text-white uppercase">
              Adresse
            </p>
            <p className="text-[16px] font-medium text-white">
              Straßenname 7 12345 Stadt
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[64px]">
        <Separator className="bg-[#ffffff76]" />
      </div>
      <div className="text-lightBlue text-[16px] mt-[40px]">
        Impressum | Datenschutz
      </div>
    </section>
  );
}

export default FooterSection;
