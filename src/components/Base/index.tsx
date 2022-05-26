import styles from "./base.module.scss";
import { Outlet } from "react-router-dom";
import stylesTema from "styles/tema.module.scss";
import React from "react";

export default function Base({ children }: {children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>Dudu Burguer</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
