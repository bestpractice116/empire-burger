import React from "react";
import styles from "./Header.module.css";
import crown from "../../assets/images/crown.png";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}>
        <img src={crown} alt="logo" />
        <h1>
          <span>Empire </span>burger
        </h1>
      </div>

      <ul className={styles.header_nav}>
        <li>Home</li>
        <li>Promoção</li>
        <li>Cardápio</li>
        <li>Comentários</li>
        <li>Contato</li>
      </ul>

      <div>
        <BsInstagram size={"2.25rem"} />
        <BsWhatsapp size={"2.25rem"} />
      </div>
    </div>
  );
};

export default Header;
