import React, { useState } from "react";

const Form = () => {
    const [ amount, setAmount] = useState(0);

     const handleSubmit= (e) => {
        // e.preventDefault();
        console.log(e);
    }
    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)}/>
            <button onClick={handleSubmit(amount)}>Donate</button>
        </form>
    )
}

export default Form;