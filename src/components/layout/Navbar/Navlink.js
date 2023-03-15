import { forwardRef } from "react";
import { useRouter } from "next/router";
import classes from "./Navlink.module.scss";

// eslint-disable-next-line react/display-name
const NavLink = forwardRef(({ href, onClick, children }, ref) => {
	const router = useRouter();

	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			className={router.pathname === href ? classes.active : ""}>
			{children}
		</a>
	);
});

export default NavLink;
