import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import StrawberryLogo from "../icons/StrawberryLogo";
import ModalMenuBtn from "./ModalMenuBtn";

export default function Navbar() {

	return (
		<nav className={styles.navbar}>
			<a href="/" className={styles.logo}>
				<StrawberryLogo />
				<h1 className={styles.logo_name}>Strawberry App</h1>
			</a>
			<ModalMenuBtn />
			<ConnectButton></ConnectButton>
		</nav>
	);
}
