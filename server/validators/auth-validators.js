// const { z } = require("zod");

// // Creating an object schema
// const signupSchema = z.object({
//   username: z
//     .string({ required_error: "Name is required" })
//     .trim()
//     .min(3, { message: "Name must be at least of 3 characters" })
//     .max(255, { message: "Name must not be more than 255 characters" }),
//   email: z
//     .string({ required_error: "Email is required" })
//     .trim()
//     .email({ message: "Invalid email address" })
//     .min(3, { message: "Email must be at least of 3 characters" })
//     .max(255, { message: "Email must not be more than 255 characters" }),
//   phone: z
//     .string({ required_error: "Phone is required" })
//     .trim()
//     .min(10, { message: "Phone must be at least of 10 characters" })
//     .max(20, { message: "Phone must not be more than 20 characters" }),
//   password: z
//     .string({ required_error: "Password is required" })
//     .min(7, { message: "Password must be at least of 6 characters" })
//     .max(1024, "Password can't be greater than 1024 characters"),
// });

// module.exports = signupSchema; 


// validate.js

const { z } = require("zod");

// Creating an object schema for signup validation
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

const validate = (schema) => async (req, res, next) => {
  try {
    const validatedBody = await schema.parseAsync(req.body);
    req.body = validatedBody; // Replace req.body with validated data
    return next();
  } catch (err) {
    const status = 422; // Unprocessable Entity
    const message = "Validation error";
    const extraDetails = err.issues.map((issue) => issue.message);
    const error = {
      status,
      message,
      extraDetails,
    };
    return res.status(status).json(error);
  }
};

module.exports = { signupSchema, validate };

