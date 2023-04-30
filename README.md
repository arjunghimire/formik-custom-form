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

## License

MIT
