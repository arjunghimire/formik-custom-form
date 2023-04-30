import React, { FC, isValidElement } from "react";
import { FormProps } from "../../types";

const InputField: FC<FormProps> = ({ component, className, ...restProps }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { ...restProps })
      ) : (
        <input className={className} {...restProps} />
      )}
    </>
  );
};

InputField.defaultProps = {
  className: "custom-form__input",
};

export default InputField;
