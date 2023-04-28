import React, { FC, isValidElement } from "react";
import { ErrorsProps } from "../../types";
import "./style.css";

const Error: FC<ErrorsProps> = ({ component, message, className }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component)
      ) : (
        <span className={className || "error"}>{message}</span>
      )}
    </>
  );
};

export default Error;
