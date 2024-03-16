import React from "react";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

function CompanyHistorySection() {
  return (
    <section className="mt-16 md:mt-[168px]">
      <div className="bg-darkBlue p-8 md:p-[98px] md:max-w-[1009px] relative">
        <p className="text-[14px] font-bold uppercase text-lightBlue">
          Unsere Firmenhistorie
        </p>
        <p className="text-[32px] font-bold text-white my-[24px]  md:max-w-[494px]">
          Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein
          Ingenieurbüro.
        </p>
        <p className="text-[14px] font-bold uppercase  text-lightBlue md:max-w-[494px]">
          Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn
          Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006
          ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer
        </p>
        <div className="mt-[56px] mb-[24px] md:max-w-[494px]">
          <Separator className="bg-[#ffffff76]" />
        </div>

        <div className="text-white text-[16px] font-bold flex gap-4">
          Lesen Sie weiter <ChevronRight />
        </div>

        <div className="hidden md:block absolute right-[-18rem] top-8">
          <img src="/images/b_1.png" alt="history image" />
        </div>
      </div>
    </section>
  );
}

export default CompanyHistorySection;
