import classes from "./Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className={classes.Layout}>
			<Navbar />

			{children}
			<Footer />
		</div>
	);
};

export default Layout;
