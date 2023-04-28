import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import BForm from "react-bootstrap/Form";
import FormikForm from "../FormikForm";
import { bootstrapformSchema } from "../validations/form";

const meta = {
  title: "Example/Formik Form",
  component: FormikForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FormikForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BootstrapForm: Story = {
  args: {
    validationSchema: bootstrapformSchema,
    data: [
      {
        labelProps: {
          title: "Fullname",
        },
        formProps: {
          name: "fullname",
          value: "",
          placeholder: "Enter fullname",
          component: <BForm.Control />,
        },
      },
      {
        labelProps: {
          title: "Email",
          className: "",
        },
        formProps: {
          name: "email",
          value: "",
          placeholder: "Enter email",
          component: <BForm.Control />,
        },
      },
      {
        labelProps: {
          title: "Password",
          className: "",
        },
        formProps: {
          name: "password",
          value: "",
          placeholder: "Enter password",
          component: <BForm.Control />,
        },
      },
    ],
    buttonProps: {
      component: <Button variant="primary">Submit</Button>,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
