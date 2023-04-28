import { useFormik } from "formik";
import React, { FC, Fragment } from "react";
import { Button, Error, InputField, Label, Textarea } from "./components";
import FormikFormProps from "./types";
import { getInitialValues } from "./utils";

const FormikForm: FC<FormikFormProps> = ({
  data,
  validationSchema,
  buttonProps,
  errorProps,
  onSubmit,
  onReset,
}) => {
  const initialValues = getInitialValues(data);
  const formik: any = useFormik({
    initialValues,
    validationSchema,
    onReset,
    onSubmit,
  });
  const { errors, touched, values, handleChange } = formik;
  return (
    <form onSubmit={formik.handleSubmit}>
      {data?.map(({ formType = "input", labelProps, formProps }, i) => {
        const { name, value, onChange, ...restFormProps } = formProps;
        return (
          <Fragment key={i}>
            {labelProps?.title && <Label {...labelProps} />}
            {formType === "input" && (
              <InputField
                name={name}
                onChange={handleChange}
                value={values?.[name]}
                {...restFormProps}
              />
            )}
            {formType === "textarea" && (
              <Textarea
                name={name}
                onChange={handleChange}
                value={values?.[name]}
                {...restFormProps}
              />
            )}

            {errors?.[name] && touched?.[name] && errors?.[name] && (
              <Error
                className={errorProps?.className}
                message={errors?.[name]}
              />
            )}
          </Fragment>
        );
      })}
      <Button {...buttonProps} />
    </form>
  );
};

FormikForm.defaultProps = {
  display: "vertical",
};

export default FormikForm;
