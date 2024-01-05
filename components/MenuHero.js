import { SmallAvatar } from "@/public/assets/images";
import Image from "next/image";

const MenuHero = () => {
  return (
    <div className="mt-5 mb-8">
      <div className="bg-white rounded-3xl p-4 flex items-center justify-start gap-4">
        <Image src={SmallAvatar} alt="avatar" className="rounded-xl" />
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-main font-montserrat text-sm leading-6 font-semibold">
            Casmir Patterson
          </h4>
          <p className="text-main-light font-montserrat text-[13px] leading-4 font-medium">
            @askcasmir
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div>
          <Image src="" alt="" />
          <h4>Deposit</h4>
        </div>
        <div>
          <Image src="" alt="" />
          <h4>Withdraw</h4>
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
