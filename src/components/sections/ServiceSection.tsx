import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const data = [
    {
      imageUrl: "/images/a_1.png",
      title: "Studien und Konzepte, Gesamtplanung",
      description:
        "Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.",
    },
    {
      imageUrl: "/images/a_2.png",
      title: "Verkehrsanlagen und Ingenieurbauwerke",
      description:
        "Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.",
    },
    {
      imageUrl: "/images/a_3.png",
      title: "Entwurfsvermessung, 3D-Laserscanning",
      description:
        "Bei Ausführung sämtlicher vermessungstechnischer Aufgaben im Leistungsbild „Ent­wurfs­vermessung“ sind wir ein leistungsstarker Partner.",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <section ref={ref} className="md:mt-[8rem]">
      <div>
        <p className="text-[24px] font-bold text-darkBlue">
          Unsere Dienstleistungen
        </p>
        <p className="text-lightBlue text-[16px] md:max-w-[520px]">
          Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die
          Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und
          Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten
          Rundum-Service mit:
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-8 md:gap-32">
        {data.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.5 * index }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
