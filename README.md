# Formik Custom form

Formik custom form is a wrapper of formik which help to create the form in a fast way.

## Installation

Install the dependencies.

```sh
npm install formik-custom-form
or
yarn add formik-custom-form
```

## Props

| parameter        | type     | default  | description                                 |
| ---------------- | -------- | -------- | ------------------------------------------- |
| data             | array    | required | Collection of form elements                 |
| validationSchema | function | optional | Yup object schemas for validation           |
| buttonProps      | array    | required | props for submit button                     |
| errorProps       | object   | optional | props for error message                     |
| onSubmit         | array    | required | function to submit form                     |
| onReset          | function | optional | function to reset form                      |

## Examples

### 1. Simple Form

```js
import React from "react";
import FormikForm from "formik-custom-form";

const data = [
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
];

const Simple = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return <FormikForm data={data} onSubmit={handleSubmit} />;
};

export default Simple;

```

### 2. With Boostrap Form

```js

import React from "react";
import FormikForm from "formik-custom-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const data = [
  {
    labelProps: {
      title: "Fullname",
    },
    formProps: {
      name: "fullname",
      value: "",
      placeholder: "Enter fullname",
      component: <Form.Control />,
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
      component: <Form.Control />,
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
      component: <Form.Control />,
    },
  },
];


const buttonProps = {
  component: <Button variant="primary">Submit</Button>,
}

const Simple = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return <FormikForm data={data} onSubmit={handleSubmit} buttonProps={buttonProps} />;
};

export default Simple;

```

### 3. With custom classname

```js
import React from "react";
import FormikForm from "formik-custom-form";

const data = [
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
];

const buttonProps = {
  title: "Login",
  className: "btn btn-success mt-2",
}

const Simple = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return <FormikForm data={data} onSubmit={handleSubmit} buttonProps={buttonProps} />;
};

export default Simple;

```

### 4. With custom validation

```js
import React from "react";
import FormikForm from "formik-custom-form";
import { object, string } from "yup";

const userSchema = object({
  email: string().email().required(),
  password: string().required(),
});

const data = [
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
];

const Simple = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <FormikForm
      data={data}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default Simple;

```

### 5. Full Form


```js
import FormikForm from "formik-custom-form";
import React from "react";

const data = [
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
      name: "veh",
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
];

const Simple = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return <FormikForm data={data} onSubmit={handleSubmit} />;
};

export default Simple;
```

## License

MIT
