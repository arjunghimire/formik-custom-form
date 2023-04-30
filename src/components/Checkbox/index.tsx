import React, { FC, isValidElement } from "react";
import { OptionsProps, RadioProps } from "../../types";

const CheckboxField: FC<RadioProps> = ({
  component,
  className,
  options,
  type,
  value,
  labelPosition,
  ...restProps
}) => {
  return (
    <>
      {isValidElement(component) ? (
        React.cloneElement(component, { ...restProps })
      ) : (
        <>
          {options?.map((optionValue: OptionsProps) => (
            <div className={className} key={optionValue?.id}>
              {labelPosition === "before" && (
                <label className={optionValue?.labelClassName}>
                  {optionValue?.label}
                </label>
              )}
              <input
                defaultChecked={value?.includes(optionValue?.value)}
                value={optionValue?.value}
                type="checkbox"
                className={optionValue?.className || "custom-form__checkbox"}
                {...restProps}
              />
              {labelPosition === "after" && <label>{optionValue?.label}</label>}
            </div>
          ))}
        </>
      )}
    </>
  );
};

CheckboxField.defaultProps = {
  labelPosition: "after",
  value: [],
  className: "custom-form__wrapper",
};

export default CheckboxField;
