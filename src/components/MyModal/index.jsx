import React from "react";
import styles from "./MyModal.module.css";

const MyModal = ({ open, onClose, children, className, title, hideHeader }) => {
  const _onClose = (event) => {
    event.stopPropagation();
    onClose && onClose();
  };
  const _onClickContent = (event) => event.stopPropagation();
  return open ? (
    <div className={styles.modal} onClick={_onClose}>
      <div
        className={`${styles.mcontent} ${className}`}
        onClick={_onClickContent}
      >
        {hideHeader ? null : (
          <div className={styles.modalHeader}>
            <h2>{title}</h2>

            <span className={styles.close} onClick={onClose}>
              &times;
            </span>
          </div>
        )}
        <div className={styles.mbody}>{children}</div>
      </div>
    </div>
  ) : null;
};

export default MyModal;
