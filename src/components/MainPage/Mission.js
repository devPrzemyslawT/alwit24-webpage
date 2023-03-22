import classes from "./Mission.module.scss";
const Mission = () => {
	return (
		<div className={classes.Content}>
			<h2>Misja i wyzwania</h2>
			<div className={classes.Mission}>
				<p>Naszą misją jest spełnianie oczekiwań naszych klientów.</p>
				<p className={classes.CenterParagraph}>
					Tworzymy produkty
					<strong> najwyższej jakości </strong> oraz dbamy o to, aby cechowały
					się <strong>długowiecznością i niezawodnością.</strong>
				</p>

				<p>
					Jesteśmy dostępni dla państwa <strong>24h na dobę</strong> po
					umówieniu wizyty telefonicznie!
				</p>
			</div>
			<div className={classes.SimpleBar}></div>
		</div>
	);
};

export default Mission;
