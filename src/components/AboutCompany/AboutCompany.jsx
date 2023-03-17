import React from "react";
import "./styleAboutCompany.scss";
const AboutCompany = () => {
  return (
    <>
      <section className="about">
        <div className="container">
         
            <div className="row aboutRow">
              <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-2">
                <h2 className="aboutTitle">Kompaniya haqida</h2>
                <p className="aboutText">
                  Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va
                  innovatsion echimlarni taqdim etish maqsadida tashkil etilgan
                  veb-agentlik. Bizning jamoamiz mijozlarga moslashtirilgan va
                  sifatli mahsulotni taklif qilish uchun yaqin hamkorlikda
                  ishlaydigan tajribali veb-dizayn, ishlab chiqish va marketing
                  mutaxassislaridan iborat.
                </p>
                <p className="aboutText">
                  Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish,
                  SEO optimallashtirish, kontent yaratish va reklama
                  kampaniyalarini o'z ichiga olgan keng ko'lamli xizmatlarni
                  taklif etamiz. Biz eng yangi texnologiyalar va innovatsion
                  usullardan foydalangan holda brendni rivojlantirish va
                  sotishni ko'paytirish bilan shug'ullanamiz.
                </p>
              </div>

              <div className="col-6-lg col-md-6 col-sm-12 mx-auto my-2">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6 my-2">
                        <h2 className="aboutCardTitle">20+</h2>
                        <p className="aboutCardText">Проектов запустил</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-6 my-2">
                        <h2 className="aboutCardTitle">4 года</h2>
                        <p className="aboutCardText">Опыта разработки</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6 my-2">
                        <h2 className="aboutCardTitle">12+</h2>
                        <p className="aboutCardText">Профессионалов</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-6 my-2">
                        <h2 className="aboutCardTitle">4 года</h2>
                        <p className="aboutCardText">Опыта разработки</p>
                    </div>
                </div>
              </div>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
