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

  const dismiss = React.useCallback(
    (selectedItem, currentState, setCurrentState) => {
      const stateNew = currentState.toSpliced(selectedItem, 1);
      console.log(stateNew);

      setCurrentState(stateNew);
    },
    []
  );

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    //cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        dismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
