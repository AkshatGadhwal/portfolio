import React from "react";
import Head from "next/head";

import styles from "./Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Watermark from "../components/Watermark";

const Home = () => (
  <div>
    <Head>
      <title>BinaryBrain</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="BinaryBrain's personal portfolio" />
    </Head>

    <Navbar page="home" />

    <div className={styles["home-header-div"]}>
      <Watermark text="Home" />

      <strong>
        Hi, I'm Ankit!,
        <br />an<span> Electrical Engineering grad.</span>
        <br />at<span> IIT Delhi</span>
      </strong>

      <h2 className={styles["short-desc"]}>
        Hardwired to write{" "}
        <span className={styles["span-highlight"]}>scalable</span> and{" "}
        <span className={styles["span-highlight"]}>efficient</span> code.
      </h2>

      <a
        href="mailto:ankitmeenaiitd@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles["contact-btn"]}>Let's get in touch!</button>
      </a>
    </div>

    <Footer />
  </div>
);

export default Home;
