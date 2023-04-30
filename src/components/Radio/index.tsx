import React, { FC, isValidElement } from "react";
import { OptionsProps, RadioProps } from "../../types";

const RadioField: FC<RadioProps> = ({
  component,
  options,
  type,
  value,
  className,
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
                <label
                  className={
                    optionValue?.labelClassName || "custom-form__label"
                  }
                >
                  {optionValue?.label}
                </label>
              )}
              <input
                defaultChecked={optionValue?.value === value}
                value={optionValue?.value}
                type="radio"
                className={optionValue?.className || "custom-form__radio"}
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

RadioField.defaultProps = {
  className: "custom-form__wrapper",
  labelPosition: "after",
};

export default RadioField;
