import { ModalProps } from "@/types";
import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded shadow-lg w-1/3 relative"
      >
        <button
          className="absolute top-2 right-2 z-50 text-red-400 p-1"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
