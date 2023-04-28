import { useFormik } from "formik";
import React, { FC, Fragment } from "react";
import { InputField } from "./components";
import FormikFormProps from "./types";
import { getInitialValues } from "./utils";
import Label from "./components/Label";

const data = [
  {
    labelProps: {
      title: "Fullname",
      className: "",
    },
    formProps: {
      name: "fullname",
      defaultValue: "hello",
      className: "form-control",
      value: "",
    },
    errorProps: {
      message: "",
      className: "",
    },
  },
  {
    labelProps: {
      title: "Email",
      className: "",
    },
    formProps: {
      name: "email",
      defaultValue: "hello",
      className: "form-control",
      value: "",
    },
    errorProps: {
      message: "",
      className: "",
    },
  },
];

const FormikForm: FC<FormikFormProps> = ({
  data,
  validationSchema,
  submitBtnTitle,
  submitBtnClassName,
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
      {data?.map(
        ({ formType = "input", labelProps, formProps, errorProps }, i) => {
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

              {errors?.[name] && touched?.[name] && errors?.[name] && (
                <span className={errorProps?.className}>{errors?.[name]}</span>
              )}
            </Fragment>
          );
        },
      )}
      <button className={submitBtnClassName} type="submit">
        {submitBtnTitle}
      </button>
    </form>
  );
};

FormikForm.defaultProps = {
  data,
  submitBtnClassName: "Submit",
  display: "vertical",
};

export default FormikForm;
