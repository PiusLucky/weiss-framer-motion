"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between  mx-4 md:mx-[9rem] items-center">
          <div>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Startseite{" "}
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Leistungen{" "}
            </p>

            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Referenzen{" "}
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              Über uns{" "}
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <MainButton
              text="Kontakt"
              classes="w-[147px] font-bold text-[16px]"
              rightIconRoute="/images/envelop_icon.png"
              rightIconClass="w-[19px] h-[19px] ml-4"
            />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="w-[6rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <div onClick={toggleMenu} className="cursor-pointer">
                <MenuIcon />
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Startseite{" "}
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Leistungen{" "}
              </p>

              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Referenzen{" "}
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Über uns{" "}
              </p>

              <div className="flex flex-col gap-[40px] select-none">
                <MainButton
                  text="Kontakt"
                  classes="w-[147px] font-bold text-[16px]"
                  rightIconRoute="/images/envelop_icon.png"
                  rightIconClass="w-[19px] h-[19px] ml-4"
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
