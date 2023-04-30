import React, { FC, isValidElement } from "react";
import { FormProps } from "../../types";

const TextArea: FC<FormProps> = ({ component, className, ...restProps }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { ...restProps })
      ) : (
        <textarea className={className} {...restProps} />
      )}
    </>
  );
};

TextArea.defaultProps = {
  className: "custom-form__textarea",
};

export default TextArea;
