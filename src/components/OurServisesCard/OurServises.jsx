import React from 'react';
import "./OurCard.scss"
import OurCard from './OurCard.jsx';
import our1 from "../../assets/images/our1.svg"
import our2 from "../../assets/images/our2.svg"
import our3 from "../../assets/images/our3.svg"
import our4 from "../../assets/images/our4.svg"
import our5 from "../../assets/images/our5.svg"
import our6 from "../../assets/images/our6.svg";
import SectionTitle from '../Sectiontitle/SectionTitle.jsx';
const OurServises = (cardImg) => {
  return (
    <div className="container our">
      <SectionTitle txt="Bizning xizmatlar" />
      <div className="OurContainer d-flex flex-wrap">
        <OurCard
          cardImg={our6}
          cardTitle={"Veb saytlar"}
          cardDesc={
            "Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating."
          }
        />
        <OurCard
          cardImg={our5}
          cardTitle={"UI/UX Dizayn"}
          cardDesc={"Biz UI/UX dizayn xizmatlarini taqdim etamiz "}
        />
        <OurCard
          cardImg={our4}
          cardTitle={"Mobil ilovalar"}
          cardDesc={"Biz eng yaxshi dizaynerlar  xizmatlarini taqdim etamiz "}
        />
        <OurCard
          cardImg={our3}
          cardTitle={"SMM"}
          cardDesc={
            "Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating."
          }
        />
        <OurCard
          cardImg={our2}
          cardTitle={"Grafik dizayn"}
          cardDesc={"Biz fotografiya xizmatlarini taqdim etamiz "}
        />
        <OurCard
          cardImg={our1}
          cardTitle={"Motion dizayn"}
          cardDesc={
            "Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating."
          }
        />
      </div>
    </div>
  );
};

export default OurServises;