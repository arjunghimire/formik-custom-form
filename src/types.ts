import React from "react";

export interface LabelProps {
  title: string;
  className?: string;
}

export interface FormProps {
  id?: string;
  name: string;
  value: string | Array<string>;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  onChange?: (
    value:
      | string
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
  ) => void;
  component?: string | React.ReactNode;
  [restProps: string]: any;
}
export interface ErrorProps {
  className?: string;
}

export interface DataProps {
  formType?: "input" | "select" | "radio" | "textarea" | "checkbox";
  labelProps?: LabelProps;
  formProps: FormProps;
}

export interface SubmitButtonProps {
  className?: string;
  title?: string;
  component?: string | React.ReactNode;
}

export interface ErrorsProps {
  className?: string;
  message: string;
  component?: string | React.ReactNode;
}

interface FormikFormProps {
  data: Array<DataProps>;
  validationSchema?: any;
  buttonProps?: SubmitButtonProps;
  errorProps?: ErrorProps;
  display?: "horizontal" | "vertical";
  onSubmit: (e: any) => void;
  onReset?: () => void;
}

export interface OptionsProps {
  id: number;
  label: string;
  value: string;
  labelClassName?: string;
  className?: string;
}

type ExcludeFormProps = Omit<FormProps, "value">;

export type RadioProps = ExcludeFormProps & {
  labelPosition: "after" | "before";
};
export type CheckboxProps = ExcludeFormProps & {
  labelPosition: "after" | "before";
};

export default FormikFormProps;
