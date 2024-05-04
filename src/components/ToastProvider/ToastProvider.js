import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      message: "This is a test",
      variant: "error",
      id: crypto.randomUUID(),
    },
    {
      message: "This is another test",
      variant: "warning",
      id: crypto.randomUUID(),
    },
    {
      message: "Hello there",
      variant: "success",
      id: crypto.randomUUID(),
    },
  ]);

  function createToast(message, variant) {
    const updateToasts = [
      ...toasts,
      {
        message,
        variant,
        id: crypto.randomUUID(),
      },
    ];

    setToasts(updateToasts);
  }

  ///** ALTERNATE DISMISSAL METHOD */

  // const dismiss = React.useCallback(
  //   (selectedItem, currentState, setCurrentState) => {
  //     const stateNew = currentState.toSpliced(selectedItem, 1);
  //     console.log(stateNew);

  //     setCurrentState(stateNew);
  //   },
  //   []
  // );

  const dismiss = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => {
        return toast.id !== id;
      });

      setToasts(nextToasts);
    },
    [toasts]
  );

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        createToast,
        dismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
