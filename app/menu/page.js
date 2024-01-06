import LiveStockMain from "@/components/LiveStockMain";
import MenuHero from "@/components/MenuHero";
import MenuMain from "@/components/MenuMain";
import FooterNav from "@/components/common/FooterNav";
import Header from "@/components/common/Header";
import MainContainer from "@/components/common/MainContainer";

const Menu = () => {
  return (
    <MainContainer marginTop={"main"}>
      <Header title={"Menu"} />
      <MenuHero />
      <MenuMain />
      <FooterNav />
    </MainContainer>
  );
};

export default Menu;
