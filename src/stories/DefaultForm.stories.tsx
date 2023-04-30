import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormikForm from "../FormikForm";
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

export const DefaultForm: Story = {
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
        },
      },
      {
        labelProps: {
          title: "Password",
        },
        formProps: {
          name: "password",
          value: "",
          type: "password",
        },
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
