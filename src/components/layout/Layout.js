import classes from "./Layout.module.scss";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className={classes.Layout}>
			<Navbar />

			{children}
		</div>
	);
};

export default Layout;
