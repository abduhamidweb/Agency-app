import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import BlogCard from "./BlogCard.jsx";
import CardImg2 from "../../assets/images/CardImg2.png";
import CardImg1 from "../../assets/images/CardImg1.png";
import CardImg3 from "../../assets/images/CardImg3.png";
import SectionTitle from "../Sectiontitle/SectionTitle.jsx"
const Blog = () => {
  return (
    <>
      <div className="container blog">
        <SectionTitle txt={"Blog yangiliklarimiz"} />

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-5"
        >
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg2}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg3}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg1}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg2}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg3}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg1}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg2}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg3}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogCard
              CardImg={CardImg1}
              CardTitle="«QA» mutaxassisi qanday bo'lishi kerak?"
              CardDesc="🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan. "
              CardDate="14:45   22/02/23"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Blog;
