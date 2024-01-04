import HomeHero from "@/components/HomeHero";
import HomeMain from "@/components/HomeMain";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";

export default function Home() {
  return (
    <MainContainer marginTop={"main"}>
      <Header />
      <HomeHero />
      <HomeMain />
    </MainContainer>
  );
}
