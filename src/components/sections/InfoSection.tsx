import React from "react";
import MainButton from "../common/MainButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InfoCard from "../cards/InfoCard";

function InfoSection() {
  const data = [
    {
      title: "Sed eget morbi cursus elit ipsum pellentesque",
      description:
        "Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...",
    },
    {
      title: "Urna velit semper faucibus ac suspendisse et",
      description:
        "In nibh sodales tincidunt vitae tortor. Turpis aliquam mattis eget cursus bibendum interdum vestibulum, aliquam. Fringilla malesuada...",
    },
    {
      title: "Bibendum augue imperdiet sapien quis enim elementum",
      description:
        "Facilisi id mus at pulvinar vitae, ornare vitae scelerisque. Lacus egestas augue cursus aliquam nulla. Sed erat a scelerisque neque...",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <section
      className="mt-8  bg-white px-4 md:px-[10rem] py-32 md:pb-[15rem] md:mt-[3rem]"
      ref={ref}
    >
      <div className="flex justify-between flex-col md:flex-row md:items-end gap-8">
        <div>
          <p className="text-[24px] font-bold text-darkBlue mb-4">
            Wissenswertes
          </p>
          <p className="text-lightBlue text-[16px] md:max-w-[520px]">
            Integer massa urna, senectus maecenas in dapibus urna amet
            hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam
            nunc condimentum nisl non gravida in.
          </p>
        </div>

        <div>
          <MainButton
            text="Unser Blog"
            classes="font-bold text-[16px]"
            rightIconRoute="/images/right_icon.png"
            rightIconClass="ml-4"
          />
        </div>
      </div>
      <div>
        <p className="text-lightBlue text-[14px] uppercase font-bold mt-32 mb-4">
          Unsere Letzten Beiträge
        </p>

        <div className="flex justify-between flex-wrap gap-8">
          {data.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.5 * index }}
            >
              <InfoCard {...info} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
