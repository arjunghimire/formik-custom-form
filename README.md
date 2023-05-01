# Formik Custom form

Formik Custom Form is a library that provides a set of components for building forms in React using the Formik library.

## Installation

Install the dependencies.

```sh
npm install formik-custom-form
or
yarn add formik-custom-form
```

## Props

### `data: Array[]`

The `data` array contains objects with the following properties:

* `labelProps`: an object containing properties to be passed to the corresponding Label component.
  * `title`: a required string property that specifies the text to be displayed on the label.
  * `className`: an optional string property that specifies the CSS class(es) to be applied to the label element.

* `formProps`: an object containing properties to be passed to the corresponding form input component.
  * `id`: an optional string property that specifies the ID of the input element.

  * `name`: a required string property that specifies the name of the input element.
  
  * `value`: a required property that can be a string or an array of strings. This property specifies the current value of the input element.
  
  * `className`: an optional string property that specifies the CSS class(es) to be applied to the input element.
  
  * `defaultValue`: an optional string property that specifies the default value of the input element.
  
  * `placeholder`: an optional string property that specifies the placeholder text to be displayed in the input element.
  
  * `type`: an optional string property that specifies the type of the input element. This property is used for input elements such as input and select.
  
  * `onChange`: an optional function that is called when the input element value changes. This function receives a parameter which can either be a string or a ChangeEvent object, depending on the input element type.
  
  * `component`: an optional property that specifies the name of a custom component to be used instead of the default input component. It can also accept a React node that represents the custom component.
  
  * `[restProps: string]`: any: This syntax allows for any other additional properties to be included, with their key being a string and their value being any data type.

  * `formType`: an optional property used to specify the type of the input field. The supported types are `text`, `select`, `select`, `radio`, `textarea`, and `checkbox`.

  * `labelClassName` (only for `radio` and `checkbox`): A string representing the class name for the label of the option

  * `labelPosition` (only for `radio` and `checkbox`): A string indicating whether the label should be positioned "before" or "after" the form element

### `validationSchema: function`

Yup object schema for validation

### `buttonProps`

Specifies the properties that can be passed to a submit button

* `className`: an optional string property that specifies the CSS class(es) to be applied to the submit button element.
* `title`: an optional string property that specifies the text to be displayed on the submit button.
* `component`: an optional property that can be either a string or a React Node, specifying the component that should be used to render the submit button.

### `errorProps`

Specifies the properties that can be passed to an error component. The `errorProps` interface defines the following properties:

* `className`: an optional string property that specifies the CSS class(es) to be applied to the error element.

### `onSubmit`

It is a function that is called when the form is submitted.

### `onReset`

It is a function  to resets all form fields to their initial values, and also resets any validation errors that may have been shown.

## Examples

<details>
  <summary>Simple Form</summary>

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

</details>

<details>
  <summary>With Boostrap Form</summary>

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

</details>

<details>
  <summary>With custom class name</summary>

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

</details>

<details>
  <summary>With Yup validation</summary>

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

</details>

<details>
  <summary>Complete Form</summary>

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

</details>

## License

MIT
