import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./OurTeam.scss";
import rasm1 from "../../assets/images/rasm1.jpg";
import rasm2 from "../../assets/images/rasm2.jpg";
import rasm3 from "../../assets/images/rasm3.jpg";
import rasm4 from "../../assets/images/rasm4.jpg";
import OurTeamCard from "./OurTeamCard.jsx";
import SectionTitle from "../Sectiontitle/SectionTitle";
const OurTeam = () => {
  return (
    <div className="container mt-5 team">
      <SectionTitle txt={"Bizning jamoa"} />
      <Swiper
        className="d-flex"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm1}
            CardTitle="Saidalixon Sobirov"
            CardDesc="Frontend dasturchi"
          />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm2}
            CardTitle="Saidalixon Sobirov"
            CardDesc="SMM designer"
          />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm3}
            CardTitle="Saidalixon Sobirov"
            CardDesc="Project Manager"
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm4}
            CardTitle="Saidalixon Sobirov"
            CardDesc="UX/UI web designer"
          />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm1}
            CardTitle="Saidalixon Sobirov"
            CardDesc="Frontend dasturchi"
          />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm2}
            CardTitle="Saidalixon Sobirov"
            CardDesc="SMM designer"
          />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm3}
            CardTitle="Saidalixon Sobirov"
            CardDesc="Project Manager"
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="swiper_slider">
          <OurTeamCard
            CardImg={rasm4}
            CardTitle="Saidalixon Sobirov"
            CardDesc="UX/UI web designer"
          />{" "}
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};

export default OurTeam;
