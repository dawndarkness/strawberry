import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import StrawberryLogo from "../icons/StrawberryLogo";
import ModalMenuBtn from "./ModalMenuBtn";

export default function Navbar() {

	return (
		<nav className={styles.navbar}>
			<a href="/">
				<StrawberryLogo />
			</a>
			<ModalMenuBtn />
			<ConnectButton></ConnectButton>
		</nav>
	);
}
