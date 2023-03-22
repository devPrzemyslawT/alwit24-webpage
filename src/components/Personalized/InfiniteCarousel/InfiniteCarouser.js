import React, { Component } from "react";
import { useRef } from "react";
import Slider from "react-slick";

import CarouselCard from "../CarouselCard";
import pompaImg from "../../../assets/img/FDFG.png";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
const MultipleItems = () => {
	const sliderRef = useRef();
	const handleNextClick = () => {
		sliderRef.current.slickNext();
	};

	const handlePrevClick = () => {
		sliderRef.current.slickPrev();
	};
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		speed: 2200,
		autoplaySpeed: 3500,
		pauseOnHover: true,
		// centerMode: true,
		cssEase: "ease-in-out",
		arrows: false,
		centerMode: false,
	};
	return (
		<div>
			<h2>heading</h2>
			<div>
				<Slider {...settings}>
					<div>
						<h1>pierwszy</h1>
						{/* <img src={pompaImg}></img> */}
					</div>
					<div>
						<h1>drugi</h1>
					</div>
					<div>
						<h1>trzeci</h1>
					</div>
					<div>
						<h1>czwarty</h1>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default MultipleItems;
