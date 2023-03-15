import classes from "./Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import MainWrapper from "./MainWrapper";
const Layout = ({ children }) => {
	return (
		<div className={classes.Layout}>
			<Navbar />

			{children}
			<MainWrapper>
				<MainContainer />
				<Footer />
			</MainWrapper>
		</div>
	);
};

export default Layout;
