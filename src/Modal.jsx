import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // this is the cleanup, the return happens just before the unmount when the unmount is triggered
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // the div below is for styling purposes. you can just pass children if you wanted
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
