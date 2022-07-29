import React, { useState } from "react";
import "./styles.scss";
import { Modal } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  classNames: string;
}

const CurdleModal = ({ children, classNames, open }: IProps) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={`curdle-modal ${classNames}`}>{children}</div>
    </Modal>
  );
};

export default CurdleModal;
