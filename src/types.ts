import React from "react";

export interface LabelProps {
  title: string;
  className: string;
}

export interface FormProps {
  id?: string;
  name: string;
  value: string;
  className: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  onChange?: (value: string | React.ChangeEvent<HTMLInputElement>) => void;
  component?:
    | string
    | React.ComponentType
    | React.ForwardRefExoticComponent<any>;
}
export interface ErrorProps {
  className: string;
}

export interface DataProps {
  formType?: "input" | "select" | "radio";
  labelProps: LabelProps;
  formProps: FormProps;
  errorProps: ErrorProps;
}

interface FormikFormProps {
  data: Array<DataProps>;
  validationSchema?: any;
  onSubmit: (e: any) => void;
  submitBtnTitle?: string;
  submitBtnClassName?: string;
  onReset: () => void;
  display?: "horizontal" | "vertical";
  component?: any;
}

export default FormikFormProps;
