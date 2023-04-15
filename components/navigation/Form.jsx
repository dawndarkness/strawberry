import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { ethers } from 'ethers';
import StrawberryCharity from '../../strawberryContract/contracts/artifacts/StrawberryCharity.json';

const Form = () => {
    const [ donationAmount, setDonationAmount] = useState('');

    // get contract address
    const CONTRACT_ADDRESS = "0xda4dAF4d6F1f29B4334345D37F2ca7A076b7352B";

    const CONTRACT_ABI = StrawberryCharity.abi;

     const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(e)
    }

    const handleDonate = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    
        const donationAmountInWei = ethers.utils.parseEther(donationAmount);
        const transaction = await contract.donate({ value: donationAmountInWei });
    
        await transaction.wait();
    
        setDonationAmount(0);
      };

    return (
        <div className={styles.form_container}>
            <form onSubmit={e => {handleSubmit(e)}} className={styles.input}>
                <input type="number" name="amount" value={donationAmount} onChange={e => setDonationAmount(e.target.value)}/>
                <button onClick={handleDonate} className={styles.donate_button}>Donate</button>
            </form>
        </div>
    )
}

export default Form;