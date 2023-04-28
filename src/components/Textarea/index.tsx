import React, { FC, isValidElement } from "react";
import { FormProps } from "../../types";

const TextArea: FC<FormProps> = ({ component, className, ...restProps }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { ...restProps })
      ) : (
        <textarea className={className || "form-textarea"} {...restProps} />
      )}
    </>
  );
};

export default TextArea;
