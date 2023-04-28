import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BootstrapForm from "react-bootstrap/Form";
import FormikForm from "../FormikForm";
import { userSchema } from "../validations/form";

const FormField = (props: any) => {
  return (
    <BootstrapForm.Control
      type="text"
      placeholder="Enter fullname"
      {...props}
    />
  );
};

const meta = {
  title: "Example/FormikForm",
  component: FormikForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof FormikForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    validationSchema: userSchema,
    data: [
      {
        labelProps: {
          title: "Fullname",
          className: "",
        },
        formProps: {
          name: "fullname",
          className: "form-control",
          value: "",
          component: FormField,
        },
        errorProps: {
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
          className: "form-control",
          value: "",
        },
        errorProps: {
          className: "",
        },
      },
    ],
    submitBtnTitle: "Login",
    submitBtnClassName: "btn btn-danger mt-2",
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
