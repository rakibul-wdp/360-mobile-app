import MainContainer from "@/components/common/MainContainer";
import { ProfilePicture } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const SignUp = () => {
  return (
    <MainContainer>
      <h1 className="text-[#141029cc] font-druk text-2xl font-black leading-8 tracking-tighter uppercase">
        Sign Up
      </h1>
      <div>
        <Image src={ProfilePicture} alt="set a profile picture" />
        <p>Set a profile picture</p>
      </div>
      <form>
        <label htmlFor="name"></label>
        <input type="text" name="name" id="" />
        <label htmlFor="email"></label>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <PiEye />
        <PiEyeSlash />
      </form>
      <div>
        <p>Terms & Privacy Policy</p>
        <div>
          <div>
            <p>Already a Member?</p>
            <Link href="/signin">Sign in</Link>
          </div>
          <button></button>
        </div>
      </div>
    </MainContainer>
  );
};

export default SignUp;
