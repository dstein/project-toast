import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastItems }) {
  console.log("yo");

  return (
    <>
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
      >
        {toastItems.map(({ message, variant, id }, index) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast keyId={id} icon={variant} toastIndex={index}>
              {message}
            </Toast>
          </li>
        ))}
      </ol>
    </>
  );
}

export default React.memo(ToastShelf);
