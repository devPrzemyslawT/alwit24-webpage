import { forwardRef } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
const NavLink = forwardRef(({ href, onClick, children }, ref) => {
	const router = useRouter();

	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			style={{ color: router.pathname === href ? "red" : "white" }}>
			{children}
		</a>
	);
});

export default NavLink;
