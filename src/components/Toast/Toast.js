import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  icon = "notice",
  children,
  handleDismiss,
  toastIndex,
  toastItems,
  setToastItems,
  removeItem,
}) {
  const IconComponent = ICONS_BY_VARIANT[icon];

  console.log(removeItem);

  return (
    <div
      data-toast-index={toastIndex}
      className={`${styles.toast} ${styles[icon]}`}
    >
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        // onClick={() => handleDismiss(false)}
        onClick={() => removeItem(toastIndex, toastItems, setToastItems)}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
