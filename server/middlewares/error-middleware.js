const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "Error from Backend";

  // Log the error for debugging
  console.error(`Error: ${message}, Details: ${extraDetails}, Status: ${status}`);

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
