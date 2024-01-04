const MainContainer = ({ children, marginTop }) => {
  const margin =
    (marginTop === "welcome" && "pt-11") || (marginTop === "main" && "pt-12");

  return (
    <main
      className={`w-[375px] h-[812px] bg-[#F5F7FA] mx-auto my-14 px-8 ${margin}`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
