import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import StrawberryLogo from "../icons/StrawberryLogo";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="/">
				<StrawberryLogo />
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
