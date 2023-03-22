import Image from "next/image";
import classes from "./CarouselCard";

const CarouselCard = props => {
	const { img, altImg, imgWidth, imgHeight, title, content } = props;

	return (
		<div className={classes.card}>
			<div className={classes.cardImg}>
				<Image
					width={imgWidth}
					height={imgHeight}
					src={img}
					alt={altImg}></Image>
			</div>
			<div className={classes.cardContent}>
				<h3>{title}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default CarouselCard;
