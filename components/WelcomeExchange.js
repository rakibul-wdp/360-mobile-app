import { Money } from "@/public/assets/images";
import Image from "next/image";
import MainContainer from "./common/MainContainer";

const WelcomeExchange = () => {
  return (
    <MainContainer marginTop={"welcome"}>
      <div className="bg-white p-8 w-32 h-32 rounded-3xl">
        <Image src={Money} alt="exchange engine" />
      </div>
      <h1 className="text-main font-druk text-2xl font-black tracking-tighter uppercase my-8">
        Exchange engine
      </h1>
      <p className="font-montserrat text-main-light text-sm leading-6 font-medium">
        Our engine matches you up with an ever growing list of traders to buy
        and sell to your cryptocurrency
      </p>
      <div className="mt-[312px] mb-10 text-center flex items-center justify-center gap-2.5">
        <hr className="border-4 border-[#00B8B9] rounded-3xl w-12" />
        <hr className="border-4 border-gray-300 rounded-full" />
      </div>
      <button className="text-white text-center font-montserrat text-base leading-7 font-semibold rounded-xl w-full px-[37px] py-[10px] bg-gradient-to-br from-[#0FA] via-[#4579F5] to-[#9C42F5] shadow-xl">
        Start trading
      </button>
    </MainContainer>
  );
};

export default WelcomeExchange;
