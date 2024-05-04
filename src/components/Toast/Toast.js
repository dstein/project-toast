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

import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ icon = "notice", children, toastIndex }) {
  const IconComponent = ICONS_BY_VARIANT[icon];

  const { toasts, setToasts, dismiss } = React.useContext(ToastContext);

  console.log("hey");

  return (
    <div
      data-toast-index={toastIndex}
      className={`${styles.toast} ${styles[icon]}`}
    >
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{icon} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismiss(toastIndex, toasts, setToasts)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
