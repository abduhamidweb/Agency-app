import React, { useState } from 'react';
import "./project.scss"
import ProjectC from './ProjectC';
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
import img6 from "../../assets/images/6.png"
import Button from '../Button/Button';
const Projects = () => {
    const data = [
        {
            id: 1,
            title: 'UYMAKON mobil ilovasi',
            category: 'Veb sayt',
            img: img1
        },
        {
            id: 2,
            title: 'UYMAKON mobil ilovasi',
            category: 'Veb dizayn',
            img: img2

        },
        {
            id: 3,
            title: 'UYMAKON mobil ilovasi',
            category: 'Veb sayt',
            img: img3
        },
        {
            id: 4,
            title: 'UYMAKON mobil ilovasi',
            category: 'SMM',
            img: img4

        },
        {
            id: 5,
            title: 'UYMAKON mobil ilovasi',
            category: 'Mobil ilova',
            img: img5

        },
        {
            id: 6,
            title: 'UYMAKON mobil ilovasi',
            category: 'Mobil ilova',
            img: img6

        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ['Barchasi', ...new Set(data.map(item => item.category))];

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    const filteredData = activeIndex === 0
        ? data
        : data.filter(item => item.category === categories[activeIndex]);
    let phoneData = filteredData.slice(0, 3)
    return (
        <>
            <section className='projects'>
                <div className="container">
                    <div className="projects__title">
                        <h2>Bajargan loyihalarimiz</h2>
                    </div>
                    <div className="projects__menu projects__menu1">
                        <div className="projects__menu__wrap">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className={`project__menu__wrap__item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="projects__menu projects__menu2">
                        <div className="projects__menu__wrap">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className={`project__menu__wrap__item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="projects__prekts projects__prekts1" >
                        <div className="row">
                            {
                                filteredData.map(item => {
                                    return <ProjectC key={item} data={item} />
                                }
                                )}
                        </div>
                    </div>
                    <div className="projects__prekts projects__prekts2">
                        <div className="row">
                            {
                                phoneData.map(item => {
                                    return <ProjectC key={item} data={item} />
                                }
                                )}
                        </div>
                    </div>
                    <div className="projects__btn">
                        <Button txt={"Barchasini ko’rish"} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;