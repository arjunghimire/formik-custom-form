import React, { FC } from "react";
import { FormProps } from "../../types";
import { isValidElementType } from "react-is";

const InputField: FC<FormProps> = ({ component: Component, ...restProps }) => {
  return (
    <>
      {isValidElementType(Component) ? (
        <Component {...restProps} />
      ) : (
        <input {...restProps} />
      )}
    </>
  );
};

export default InputField;
