import { Ethereum } from "@/public/assets/images";
import Image from "next/image";
import { BiSolidUpArrow } from "react-icons/bi";
import { MdKeyboardArrowDown, MdPlayArrow } from "react-icons/md";

const HomeMain = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3
          className="text-main font-montserrat text-xl font-semibold"
          style={{ letterSpacing: "-0.4px" }}
        >
          Tokens
        </h3>
        <div className="flex items-center justify-between gap-1 pl-4 py-1.5 pr-2 rounded-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl">
          <p className="text-white font-montserrat text-sm leading-6 font-semibold ">
            All
          </p>
          <MdKeyboardArrowDown className="text-2xl text-gray-300" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <Image src={Ethereum} alt="crypto currency" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-main font-montserrat text-base leading-7 font-semibold">
              Ethereum
            </h4>
            <p className="text-main-light font-montserrat text-[14px] leading-4 font-medium">
              ETH
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <h4
            className="text-main font-gilroy text-base uppercase"
            style={{ letterSpacing: "-0.4px" }}
          >
            18.00269408
          </h4>
          <div className="flex items-center justify-between font-gilroy text-[13px] leading-4">
            <MdPlayArrow className="-rotate-90 text-[#00B8B9]" />
            <p className="text-[#00B8B9]">0.51%</p>
            <hr className="border-2 rounded-full border-gray-400 mx-2" />
            <p className="text-main-light">$61,512.06</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
