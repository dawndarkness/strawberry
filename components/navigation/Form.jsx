import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { ethers } from 'ethers';
import StrawberryCharity from '../../strawberryContract/contracts/artifacts/StrawberryCharity.json';

const Form = () => {
    const [donationAmount, setDonationAmount] = useState('');

    // get contract address
    const CONTRACT_ADDRESS = "0x102482DD4e494a8c1341725cc29ecC557D705E1b";

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
        const transaction = await contract.donate({ value: donationAmountInWei, gasLimit: 50000 });

        await transaction.wait();

        setDonationAmount(0);
    };

    return (
        <div className={styles.form_container}>
            <div className={styles.form_container}>
                <input placeholder="Enter amount in ETH" type="number" name="amount" value={donationAmount} onChange={e => setDonationAmount(e.target.value)} className={styles.input} />
                <button onClick={handleDonate} className={styles.donate_button}>Donate</button>
            </div>
        </div>
    )
}

export default Form;
