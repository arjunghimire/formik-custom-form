import React, { FC } from "react";
import { LabelProps } from "../../types";

const Label: FC<LabelProps> = ({ title, className }) => {
  return <label className={className}>{title}</label>;
};

Label.defaultProps = {
  className: "",
  title: "Label",
};

export default Label;
