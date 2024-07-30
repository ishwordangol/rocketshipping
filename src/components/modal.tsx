// components/Modal.tsx
import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-12 w-11/12 lg:min-w-md relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-primary"
          onClick={onClose}
        >
          <span className="icon-x text-3xl"></span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
