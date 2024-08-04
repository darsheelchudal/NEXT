import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, { message: "Username must be atleast 3 characters" })
  .max(20, { message: "Username must not be greater than 20 characters" })
  .regex(/^[a-zA-Z\-]+$/);

export const signUpScheme = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
