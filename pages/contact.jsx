import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Watermark from "../components/Watermark";
import styles from "./Contact.module.css";
import telegram from "../assets/telegram.svg";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import Footer from "../components/Footer";

const Contact = () => (
  <div>
    <Navbar page="contact" />
    <Watermark text="Contact" />
    <div className={styles["contact-header-div"]}>
      <Head>
        <title>BinaryBrain</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="BinaryBrain's personal portfolio" />
      </Head>

      <strong className={styles["strong-text"]}>You can find me at:</strong>
      <ul className={styles["contact-list"]}>
        <li>
          <a href="https://t.me/Ankit10M">
            <img src={telegram} alt="telegram" />
            <span className={styles["contact-item-text"]}>Telegram</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:ankitmeenaiitd@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="email" />
            <span className={styles["contact-item-text"]}>Email</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/Binary-Brain">
            <img src={github} alt="github" />
            <span className={styles["contact-item-text"]}>GitHub</span>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/ankitmeena10/">
            <img src={linkedin} alt="linkedin" />
            <span className={styles["contact-item-text"]}>LinkedIn</span>
          </a>
        </li>
      </ul>

      <Footer />
    </div>
  </div>
);

export default Contact;
