import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <h3 className={styles.footerLogo}>BookShala</h3>
        <p>Find your perfect book here at BookShala!</p>
        <div className={styles.footerLinks}>
          <p className={styles.footerLink}>Privacy Policy</p>
          <p className={styles.footerLink}>Terms of Use</p>
        </div>
        <small>© 2023 BookShala</small>
      </div>
      <div className={styles.footerRight}>
        <ul className={styles.footerSocial}>
          <li style={{ listStyle: "none" }}>
            <h3 className={styles.footerLink}>Connect</h3>
            <p className={styles.footerSocialLink}>Github</p>
            <p className={styles.footerSocialLink}>Twitter</p>
            <p className={styles.footerSocialLink}>LinkedIn</p>
            <p className={styles.footerSocialLink}>Dev Portfolio</p>{" "}
            <p className={styles.footerSocialLink}>YouTube</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
