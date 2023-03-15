import classes from "./MainContainer.module.scss";

const MainContainer = ({ children }) => {
	return <div className={classes.mainContainer}>{children}</div>;
};

export default MainContainer;
