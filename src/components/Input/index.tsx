import React, { FC, isValidElement } from "react";
import { FormProps } from "../../types";

const InputField: FC<FormProps> = ({ component, className, ...restProps }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { ...restProps })
      ) : (
        <input className={className || "form-input"} {...restProps} />
      )}
    </>
  );
};

export default InputField;
