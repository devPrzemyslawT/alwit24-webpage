import classes from "./HeroMainPage.module.scss";

const HeroMainPage = () => {
	return (
		<div className={classes.Hero}>
			<div className={classes.HeroContent}>
				<h1>HYDRAULIKA SIŁOWA</h1>
				<h3>
					Proponowane produkty znajdują zastosowanie w maszynach: <br></br>{" "}
					przemysłowych, rolniczych, budowlanych, górniczych, <br></br>
					urządzeniach dźwigowych, transportowych i wielu innych.
				</h3>
			</div>
		</div>
	);
};

export default HeroMainPage;
