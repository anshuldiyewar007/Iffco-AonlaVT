const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    return next();
  } catch (err) {
    // Log validation error details
    console.error("Validation Error: ", err);

    // Build validation error response
    const errorResponse = {
      status: 422,
      message: "Invalid input provided",
      extraDetails: err.errors?.[0]?.message || "Validation error",
    };

    // Forward error to error middleware
    next(errorResponse);
  }
};

module.exports = validate;
