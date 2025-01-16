const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

// Creating an object schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
  city: z
    .string({ required_error: "City is required" })
    .trim()
    .min(1, { message: "City is required" }),
  degree: z
    .string({ required_error: "Degree is required" })
    .trim()
    .min(1, { message: "Degree is required" }),
  percentage: z
    .number({ required_error: "Percentage is required" })
    .min(0, { message: "Percentage must be between 0 and 100" })
    .max(100, { message: "Percentage must be between 0 and 100" }),
  yearOfCompletion: z
    .number({ required_error: "Year of completion is required" })
    .min(1900, { message: "Invalid year" }),
  college: z
    .string({ required_error: "College is required" })
    .trim()
    .min(1, { message: "College is required" }),
  branch: z
    .string({ required_error: "Branch is required" })
    .trim()
    .min(1, { message: "Branch is required" }),
});


module.exports = {signupSchema , loginSchema};