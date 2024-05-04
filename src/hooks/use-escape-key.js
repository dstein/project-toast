import React from "react";

function useEscapeKey(setState) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setState([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    //cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setState]);
}

export default useEscapeKey;
