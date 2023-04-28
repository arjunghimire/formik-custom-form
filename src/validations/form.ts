import { object, string } from "yup";

const bootstrapformSchema = object({
  fullname: string().required(),
  email: string().email().required(),
  password: string().required(),
});

const userSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export { userSchema, bootstrapformSchema };
