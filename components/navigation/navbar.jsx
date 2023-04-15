import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import StrawberryLogo from "../icons/StrawberryLogo";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="/" target={"_blank"}>
				{/* <img
					className={styles.alchemy_logo}
					src="/strawberry_logo.png"
				></img> */}
				<StrawberryLogo />
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
