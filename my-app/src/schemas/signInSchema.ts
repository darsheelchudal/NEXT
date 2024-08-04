import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string(), //identifier can be email , username or any other unique identifier
  // .email()
  // .regex(
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // ),
  password: z
    .string()
    .min(6, { message: "Must be atleast 6 characters" })
    .max(16, { message: "Must not be greater than 16 characters" }),
});
