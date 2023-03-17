import React from "react";
import "./styleNews.scss";
import aboutImg from "../../assets/images/aboutImage.jpg";
import aboutImg2 from "../../assets/images/aboutNewsImage.jpg";
import aboutNewsImg from "../../assets/images/aboutCard1.jpg";
import aboutNewsImg2 from "../../assets/images/aboutCardImg2.jpg";
import aboutNewsImg3 from "../../assets/images/aboutCardImg3.jpg";
import aboutNewsImg4 from "../../assets/images/aboutCardImg4.jpg";
const News = () => {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="newsWrapp">
            <div className="mainSec">
              <img src={aboutImg} alt="about-img" className="topNewsImg" />

              <div className="mainNewsTextWrapp">
                <h3 className="newsTitle">
                  IT Parkʼda eksportga yo‘naltirilgan IT-kompaniyalar bilan
                  uchrashuv bo‘lib o‘tdi
                </h3>
                <p className="newsText">
                  24-fevral kuni IT Park Toshkent filialida IT Park direktori
                  Farhod Ibragimov va tashkilotning rezident-eksportyor
                  kompaniyalari oʻrtasida uchrashuv bo‘lib o‘tdi. Tadbirning
                  maqsadi – IT va BPO xizmatlari eksportining joriy holatini va
                  O‘zbekistonda IT eksportini oshirish choralarini muhokama
                  qilishdan iborat. Uchrashuv davomida Farhod Zairovich
                  eksportning joriy holatiga oid ayrim statistik ma’lumotlar
                  bilan boʻlishdi. Shunday qilib, oʻtgan yilgi maʼlumotlarga
                  koʻra, IT-xizmatlar eksporti hajmi $140 millionni tashkil
                  etdi, eksportning qariyb 48 foizi dasturiy taʼminotni
                  yaratuvchi kompaniyalariga toʻgʻri keladi, 44 foizdan biroz
                  koʻprogʻi esa biznes jarayonlari autsorsingi bilan
                  shugʻullanuvchi kompaniyalarga toʻgʻri keladi. Bundan
                  tashqari, eksportning 80% dan ziyodi AQSh bozoriga toʻgʻri
                  keladi, ammo boshqa koʻplab potensial bozorlar, jumladan
                  Yevropa, Kanada va Sharq mamlakatlari mavjud. “Afsuski,
                  eksportning asosiy qismi Toshkentdan amalga oshiriladi, demak,
                  biz boshqa hududlardan ham eksportni yanada oshirishga e’tibor
                  qaratishimiz kerak. Barchangizga ma’lumki, Prezident bizga
                  IT-xizmatlar eksportini 300 million dollargacha oshirish
                  vazifasini qo‘ydi. Ishonchim komilki, birgalikdagi
                  sa’y-harakatlarimiz va bilimlarimiz bilan eksportni oshirish
                  bo‘yicha samarali strategiyalarni ishlab chiqa olamiz va
                  Oʻzbekistonda IT sohasi rivojiga oʻz hissamizni qoʻsha
                  olamiz”, – dedi IT Park direktori.
                </p>
                <img src={aboutImg2} alt="news-img" className="newsImg2 my-3" />
                <p className="newsText">
                  Hozirda IT Park Uzbekistan xalqaro moliya markazi hamda
                  kompaniyalarga yangi mahsulot va xizmatlarni nazorat
                  qilinadigan muhitda testdan o‘tkazish imkonini beruvchi
                  tartibga soluvchi sandbox yaratish ustida ishlamoqda. Bu
                  xorijiy kompaniyalar uchun qulaylik va xavfsizlik darajasini
                  taʼminlaydigan shartnomalar va kelishuvlar uchun ingliz
                  huquqidan foydalanish imkoniyatini oʻz ichiga oladi.
                  Tashkilot, shuningdek, rezident eksport qiluvchi kompaniyalar
                  uchun maxsus raqamli bankni ishlab chiqish jarayonida. U
                  ularning ehtiyojlariga moslashtirilgan bir qator moliyaviy
                  xizmatlarni, shu jumladan, xorijiy valyutasidagi hisoblar va
                  raqamli toʻlov tizimlarini taklif qiladi. Asosiy qism yakunida
                  savol-javoblar sessiyasi boshlandi. Ayrim rezident
                  kompaniyalar vakillari eksportdagi muvaffaqiyatlari bilan
                  boʻlishdilar, shuningdek, birgalikdagi sa’y-harakatlar bilan
                  qo‘yilgan vazifaga qanday erishish mumkinligi bo‘yicha
                  takliflar bilan almashdilar. Bundan tashqari, kompaniyalar
                  duch kelgan toʻsiqlar haqida gapirdilar. Xususan, relokatsiya
                  paytidagi uy-joy muammosi va uy-joy narxining oshishi haqida
                  soʻz yuritildi. Takliflar qatorida bojxona rasmiylashtiruvi
                  uchun imtiyozlar va xorijiy mamlakatlarga IT sohasidagi rasmiy
                  tashriflarda ishtirok etish so‘rovi bildirildi.
                </p>
                <hr />
<div className="bottomDateInfo d-flex justify-content-between flex-wrap">
    <span className="newsTags my-2">
    #hi_tech #IT_PARK
    </span>
    <span className="newsDate d-flex align-items-center my-2">
    <i class="bi bi-calendar-week"></i>
    14:45   22/02/23
    </span>
    <span className="newsShare d-flex align-items-center my-2 ms-3">
    <i class="bi bi-share"></i>
    Ulashish
    </span>
</div>

              </div>
            </div>
            <div className="sidebar">
              <div className="sidebarCard mb-4">
                <img
                  src={aboutNewsImg}
                  alt="about-img"
                  className="sidebarImg1"
                />
                <div className="sidebarCardInfo">
                  <h3 className="sidebarCardTitle">
                    Dizaynni o'rgangandan keyin nima qilish kerak?
                  </h3>
                </div>
              </div>
              <div className="sidebarCard mb-4">
                <img
                  src={aboutNewsImg2}
                  alt="about-img"
                  className="sidebarImg1"
                />
                <div className="sidebarCardInfo">
                  <h3 className="sidebarCardTitle">
                    Bitiruvchilarning 81 foizi o’zlari yoqtirgan ish faoliyati
                    bilan...
                  </h3>
                </div>
              </div>
              <div className="sidebarCard mb-4">
                <img
                  src={aboutNewsImg3}
                  alt="about-img"
                  className="sidebarImg1"
                />
                <div className="sidebarCardInfo">
                  <h3 className="sidebarCardTitle">
                    Frontend yo'nalishidagi musobaqaga tayyormisiz?
                  </h3>
                </div>
              </div>
              <div className="sidebarCard mb-4">
                <img
                  src={aboutNewsImg4}
                  alt="about-img"
                  className="sidebarImg1"
                />
                <div className="sidebarCardInfo">
                  <h3 className="sidebarCardTitle">
                    «Najot Ta'lim»da navbatdagi kirish sinovlari bo'lib o'tdi
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
