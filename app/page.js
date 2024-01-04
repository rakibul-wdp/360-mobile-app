import Header from "@/components/common/Header";
import HomeHero from "@/components/common/HomeHero";
import MainContainer from "@/components/common/MainContainer";

export default function Home() {
  return (
    <MainContainer marginTop={"main"}>
      <Header />
      <HomeHero />
    </MainContainer>
  );
}
