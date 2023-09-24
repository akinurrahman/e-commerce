import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { AppContext, useProductContext } from "../context/productcontex";

const About = () => {
  const { myName } = useContext(AppContext);

  const data = {
    name: "Shoppy Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
