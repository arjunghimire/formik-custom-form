import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormikForm from "../FormikForm";
import React, { useState } from "react";

const meta = {
  title: "Example/Formik Custom Form",
  component: FormikForm,
  parameters: {
    layout: "fullscreen",
    controls: {
      hideNoControlsWarning: true,
    },
  },
} satisfies Meta<typeof FormikForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => {
  const [state, setState] = useState({});
  const handleSubmit = (values: any) => {
    setState(values);
  };
  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <FormikForm {...args} onSubmit={handleSubmit} />

      <p>{JSON.stringify(state)}</p>
    </div>
  );
};
export const FullForm: Story = Template.bind({});

FullForm.args = {
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
    {
      formType: "select",
      labelProps: {
        title: "Select",
      },
      formProps: {
        name: "vehicle",
        value: "car",
        options: [
          {
            id: 1,
            label: "Car",
            value: "car",
          },
          {
            id: 2,
            label: "Jeep",
            value: "jeep",
          },
        ],
      },
    },
    {
      formType: "radio",
      formProps: {
        name: "gender",
        value: "female",
        labelPosition: "after",
        options: [
          {
            id: 1,
            label: "Male",
            value: "male",
          },
          {
            id: 2,
            label: "Female",
            value: "female",
          },
        ],
      },
    },
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
    {
      formType: "checkbox",
      formProps: {
        name: "color",
        value: ["pink"],
        options: [
          {
            id: 1,
            label: "Pink",
            value: "pink",
          },
          {
            id: 2,
            label: "Red",
            value: "red",
          },
          {
            id: 3,
            label: "Black",
            value: "black",
          },
        ],
      },
    },
  ],
  onSubmit: (values) => {
    alert(JSON.stringify(values));
  },
};
