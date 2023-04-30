import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormikForm from "..";
import { userSchema } from "../validations/form";

const meta = {
  title: "Example/Formik Custom Form",
  component: FormikForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FormikForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomClassnameForm: Story = {
  args: {
    validationSchema: userSchema,
    data: [
      {
        labelProps: {
          title: "Email",
        },
        formProps: {
          name: "email",
          value: "",
          className: "form-control",
        },
      },
      {
        labelProps: {
          title: "Password",
        },
        formProps: {
          name: "password",
          value: "",
          className: "form-control",
          type: "password",
        },
      },
    ],
    buttonProps: {
      title: "Login",
      className: "btn btn-success mt-2",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
