import {
  useEffect,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import type { ModalProps } from "./BaseType";
import Button from "./Button";
import { X } from "lucide-react";

const BaseModal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Lock scroll + store previous focus
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Restore focus on close
  useEffect(() => {
    if (!isOpen && previouslyFocusedElement.current) {
      previouslyFocusedElement.current.focus();
    }
  }, [isOpen]);

  // ESC key handling
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Focus trap
  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;

    const focusableElements =
      modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) || [];

    if (focusableElements.length === 0) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="relative z-10 w-full max-w-lg bg-card rounded-sm shadow-xl p-6 outline-none"
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-text-muted hover:text-text-main text-xl"
          startIcon={<X />}
        />

        {children}
      </div>
    </div>
  );
};

export default BaseModal;
