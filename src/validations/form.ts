import { object, string } from "yup";

const userSchema = object({
  fullname: string().required(),
  // email: string().email().required(),
  // password: string().required(),
});

export { userSchema };
