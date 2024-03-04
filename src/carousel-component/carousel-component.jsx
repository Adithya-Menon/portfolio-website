import React from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import "./carousel.css";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Carousel({data}) {
    const [slide, setSlide] = useState(0);
    const navigate = useNavigate();

    const nextSlide  = () => {
        setSlide(slide === data.slides.length - 1 ? 0: slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
    };

    const projectClick = () => {
        navigate('/projects'); 
      };
    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick= {prevSlide} />
            {data.slides.map((item, idx) => {
                return <img src = {item.src} alt = {item.alt} key = {idx} className= {slide === idx ? "slide": "slide slide-hidden"} onClick={projectClick}/>
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick= {nextSlide} />
            <span className="indicators ">
                {data.slides.map((_, idx) => {
                    return <button key = {idx} onClick={() =>  setSlide(idx)} className={slide === idx ? "indicator": "indicator indicator-inactive"}> </button>
                })}
            </span>
        </div>
    )
} 

export default Carousel;