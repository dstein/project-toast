import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState();
  const [showToast, setShowToast] = React.useState(false);

  const [toasts, setToasts] = React.useState([
    {
      message: "This is a test",
      variant: "error",
    },
    {
      message: "This is another test",
      variant: "warning",
    },
    {
      message: "Sup Bitches",
      variant: "success",
    },
  ]);

  //TEST
  //const dismiss = useHandleDismiss(1, toasts, setToasts);

  function useHandleDismiss(selectedItem, currentState, setCurrentState) {
    //const stateNew = [...currentState];
    const stateNew = currentState.toSpliced(selectedItem, 1);
    console.log(stateNew);

    setCurrentState(stateNew);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* TOAST */}
      {/* {showToast && (
        <Toast icon={variant} handleDismiss={setShowToast}>
          {message}
        </Toast>
      )} */}

      <ToastShelf
        toastItems={toasts}
        setToastItems={setToasts}
        removeItem={useHandleDismiss}
      />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        {/* <p>{message}</p> */}

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((value) => (
              <label key={value}>
                <input
                  id={`variant-${value}`}
                  type="radio"
                  name="variant"
                  value={value}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                {value}
              </label>
            ))}
          </div>

          {/* <p>{variant}</p> */}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              disabled={!message && true}
              // onClick={(event) => setShowToast(true)}
              onClick={(event) => {
                const updateToasts = [
                  ...toasts,
                  {
                    message,
                    variant,
                  },
                ];

                setToasts(updateToasts);
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
