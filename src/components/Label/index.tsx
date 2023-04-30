import React, { FC } from "react";
import { LabelProps } from "../../types";

const Label: FC<LabelProps> = ({ title, className }) => {
  return <label className={className}>{title}</label>;
};

Label.defaultProps = {
  className: "custom-form__label",
  title: "Label",
};

export default Label;
