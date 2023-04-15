import React, { useState } from 'react';
import styles from "../../styles/Navbar.module.css";
import { NPO_LIST } from '../../data/npo';
import Form from "./Form";

const Modal = ({
  show,
}) => {

  if (!show) return null;
//   const [ amount, setAmount] = useState(0);

//   const handleSubmit= (e) => {
//     // e.preventDefault();
//     console.log(e);
//   }

  return (
    <div className={styles.modal_container}>
        <div className={styles.modal_content}>
        {
            NPO_LIST.map((i) => {
                return (
                    <div className={styles.modal_card} key={i.name}>
                        <img className={styles.Modalmodal_img} src={i.image} alt={i.name} width="50px"/>
                        <h1 className={styles.modal_title}>{i.name}</h1>
                        <p>{i.description}</p>
                        <Form />
                    </div>
                )
            })
        }
        </div>
    </div>
  );
};

export default Modal;