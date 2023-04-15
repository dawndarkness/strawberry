import React, { FunctionComponent, useState } from 'react';
import styles from "../../styles/Navbar.module.css";

import Modal from './Modal';

const ModalMenuBtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && <div className={styles.overlay}/>}
      <button
        className={styles.npo_button}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        open={menuOpen}
      >
        {menuOpen ? (
          "Donate Later"
        ) : (
          "Donate Now"
        )}
      </button>
      <Modal
        show={menuOpen}
      />
    </>
  );
};

export default ModalMenuBtn;