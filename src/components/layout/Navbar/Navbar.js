import Link from "next/link";
import NavLink from "./Navlink";
import Image from "next/image";

import classes from "./Navbar.module.scss";

import logoImg from "../../../assets/img/LogoAlwit.png";

const Navbar = () => {
	return (
		<div className={classes.navWrapper}>
			<nav className={classes.navigation}>
				<div className={classes.navLogo}>
					<Link href='/' legacyBehavior passHref>
						<NavLink legacyBehavior>
							<Image height={80} width={200} alt='alwit-logo' src={logoImg} />
						</NavLink>
					</Link>
				</div>
				<div className={classes.navLinks}>
					<Link href='/' legacyBehavior passHref>
						<NavLink legacyBehavior>Strona główna</NavLink>
					</Link>
					<Link href='/onas' legacyBehavior passHref>
						<NavLink legacyBehavior>O nas</NavLink>
					</Link>
					<Link href='/oferta' legacyBehavior passHref>
						<NavLink legacyBehavior>Oferta</NavLink>
					</Link>

					<Link href='/kontakt' legacyBehavior passHref>
						<NavLink legacyBehavior>Kontakt</NavLink>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
