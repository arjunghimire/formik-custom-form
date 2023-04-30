import React, { FC, isValidElement } from "react";
import { FormProps, OptionsProps } from "../../types";

const SelectField: FC<FormProps> = ({
  component,
  className,
  options,
  value,
  ...restProps
}) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { ...restProps })
      ) : (
        <select className={className} {...restProps}>
          {options?.map((optionValue: OptionsProps) => (
            <option key={optionValue?.id} value={optionValue.value}>
              {optionValue.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

SelectField.defaultProps = {
  className: "custom-form__select",
};

export default SelectField;
