import React from 'react'
import styles from './Footer.module.css'
import profile from '../../assets/profile logo.png'
const Footer = () => {
  return (
    <div class={styles.footer}>
        <p> <img src={profile} alt='logo' /> &copy; 2024 Sujit Vishwakarma.  
        All rights reserved.</p>
    </div>
  )
}

export default Footer
