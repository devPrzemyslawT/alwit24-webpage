import classes from "./Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

import MainWrapper from "./MainWrapper";
const Layout = ({ children }) => {
	return (
		<div className={classes.Layout}>
			<Navbar />
			<MainWrapper>
				{children}
				<Footer />
			</MainWrapper>
		</div>
	);
};

export default Layout;
