import styles from './footer.module.css';
import React from 'react'
import { FaFacebookF,FaInstagram,FaLinkedin } from "react-icons/fa";

const Footerpage = () => {
    return (
       
        <div className={styles.footer}> <span>©2021 Copyright: Mahmoud Ahmed </span> 
        <div className={styles.icon}><FaFacebookF/><FaInstagram/><FaLinkedin/></div> 
        </div>
     
    )
}

export default Footerpage;
