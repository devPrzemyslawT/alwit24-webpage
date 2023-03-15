import Image from "next/image";
import classes from "./Footer.module.scss";

import logoImg from "../../../assets/img/logo.svg";

const Footer = () => {
	return (
		<div className={classes.footer}>
			<div>
				<p>ALWIT Krzysztof Witkowski</p>
				<p>ul. Wł. Broniewskiego 10</p>
				<p>09-230 Bielsk</p>
				<p>NIP: 7742883814</p>
			</div>
			<div>
				<Image height={40} width={100} alt='alwit-logo' src={logoImg} />
			</div>
			<div>
				<p>E-mail: alwit@onet.pl</p>
				<p>Tel.: +48 503-155-108</p>
			</div>
		</div>
	);
};

export default Footer;
