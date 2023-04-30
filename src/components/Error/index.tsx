import React, { FC, isValidElement } from "react";
import { ErrorsProps } from "../../types";

const Error: FC<ErrorsProps> = ({ component, message, className }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component)
      ) : (
        <span className={className}>{message}</span>
      )}
    </>
  );
};

Error.defaultProps = {
  className: "custom-form__error",
};

export default Error;
