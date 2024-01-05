import LiveStockMain from "@/components/LiveStockMain";
import MenuHero from "@/components/MenuHero";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";

const Menu = () => {
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"Menu"} />
      <MenuHero />
      <LiveStockMain />
      <FooterNav />
    </MainContainer>
  );
};

export default Menu;
