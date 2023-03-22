import classes from "./MainWrapper.module.scss";

const MainWrapper = ({ children }) => {
	return <div className={classes.mainWrapper}>{children}</div>;
};

export default MainWrapper;
