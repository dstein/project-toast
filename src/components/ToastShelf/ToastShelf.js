import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  console.log("shelf");

  const { toasts } = React.useContext(ToastContext);

  return (
    <>
      <ol className={styles.wrapper}>
        {toasts.map(({ message, variant, id }, index) => (
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
