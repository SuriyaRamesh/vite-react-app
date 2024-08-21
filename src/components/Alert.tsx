import { ReactNode } from "react";

interface AlertProps {
    children : ReactNode;
    OnClose: () => void;
}

const Alert = ({ children, OnClose } : AlertProps) => {
  return (
    <div className="alert alert-danger alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={OnClose}></button>
    </div>
  )
}

export default Alert
