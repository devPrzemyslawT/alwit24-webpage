import Link from "next/link";
import NavLink from "./Navlink";

const Navbar = () => {
	return (
		
			
			<nav>
				
				<Link href='/' legacyBehavior passHref>
					<NavLink legacyBehavior>Home</NavLink>
				</Link>
				<Link href='/oNas' legacyBehavior passHref>
					<NavLink legacyBehavior>O nas</NavLink>
				</Link>
				<Link href='/oferta' legacyBehavior passHref>
					<NavLink legacyBehavior>Oferta</NavLink>
				</Link>
				<Link href='/galeria' legacyBehavior passHref>
					<NavLink legacyBehavior>Galeria</NavLink>
				</Link>
				<Link href='/kontakt' legacyBehavior passHref>
					<NavLink legacyBehavior>Kontakt</NavLink>
				</Link>
			</nav>
		
	);
};

export default Navbar;
