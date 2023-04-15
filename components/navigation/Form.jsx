import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";

const Form = () => {
    const [ amount, setAmount] = useState(0);

     const handleSubmit= (e) => {
        // e.preventDefault();
        console.log(e);
    }
    return (
        <div className={styles.form_container}>
            <form onSubmit={e => {handleSubmit(e)}}>
                <input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} class={styles.input}/>
                <button onClick={handleSubmit(amount)} class={styles.donate_button}>Donate</button>
            </form>
        </div>
    )
}

export default Form;