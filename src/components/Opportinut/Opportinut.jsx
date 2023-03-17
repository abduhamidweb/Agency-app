import React from 'react';
import "./opportinut.scss"
import SectionTitle from '../Sectiontitle/SectionTitle';
import o1 from "../../assets/images/o1.png";
import o2 from "../../assets/images/o2.png";
import o3 from "../../assets/images/o3.png";
import o4 from "../../assets/images/o4.png";
import o5 from "../../assets/images/o5.png";
import o6 from "../../assets/images/o6.png";
import OppoCard from './OppoCard';
const Opportinut = () => {
    let array = [
        {
            id: 1,
            img: o1,
            title: "Individual yondashuv",
            desc: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz"
        },
        {
            id: 2,
            img: o2,
            title: "Ekspertiza",
            desc: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz"
        },
        {
            id: 3,
            img: o3,
            title: "Professional xizmat",
            desc: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz"
        },
        {
            id: 4,
            img: o4,
            title: "Individual yondashuv",
            desc: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz"
        },
        {
            id: 5,
            img: o5,
            title: "Ekspertiza",
            desc: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz"
        },
        {
            id: 6,
            img: o6,
            title: "Professional xizmat",
            desc: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz"
        },
    ];
    let phoneData = array.slice(0, 3)
    return (
        <>
            <section className='oppor'>
                <div className="container">
                    <SectionTitle txt={"Bizning afzalliklarimiz"} />
                    <div className="section_cards">
                        <div className="desctop">
                            <div className="row ">
                                {
                                    array.map(item => {
                                        return <OppoCard key={item.id} data={item} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="row phone">
                            {
                                phoneData.map(item => {
                                    return <OppoCard key={item.id} data={item} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Opportinut;