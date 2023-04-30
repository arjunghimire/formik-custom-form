import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormikForm from "..";

const meta = {
  title: "Example/Formik Custom Form",
  component: FormikForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FormikForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextareaForm: Story = {
  args: {
    data: [
      {
        formType: "textarea",
        labelProps: {
          title: "Description",
        },
        formProps: {
          name: "description",
          value: "",
          cols: "40",
          rows: "2",
        },
      },
    ],
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
