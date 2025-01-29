import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        {children}
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={() => dialog.current.close()}
          >
            {buttonCaption || "Close"}
          </button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
