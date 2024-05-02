import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastItems, setToastItems, removeItem }) {
  //console.log(toastItems);
  //console.log(removeItem);

  console.log("yo");

  return (
    <>
      {/* <ol className={styles.wrapper}>
        <li className={styles.toastWrapper}>
          <Toast variant="notice">Example notice toast</Toast>
        </li>
        <li className={styles.toastWrapper}>
          <Toast variant="error">Example error toast</Toast>
        </li>
      </ol> */}

      <ol className={styles.wrapper}>
        {toastItems.map(({ message, variant, id }, index) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              keyId={id}
              icon={variant}
              toastIndex={index}
              toastItems={toastItems}
              setToastItems={setToastItems}
              removeItem={removeItem}
            >
              {message}
            </Toast>
          </li>
        ))}
      </ol>
    </>
  );
}

export default React.memo(ToastShelf);
