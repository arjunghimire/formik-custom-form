import React, { FC, isValidElement } from "react";
import { SubmitButtonProps } from "../../types";

const Button: FC<SubmitButtonProps> = ({ component, className, title }) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { type: "submit" })
      ) : (
        <button className={className} type="submit">
          {title}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  title: "Submit",
};

export default Button;
