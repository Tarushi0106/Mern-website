// const errorMiddleware = (err, req, res, next) => {
//     const status = err.status | 500;
//     const message = err.message | "backend error";
//     const extraDetails = err.extraDetails | "ERROR FROM BACKEND "

//     return res.status(status).json({ message, extraDetails })
// };
// module.exports = errorMiddleware;

// errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || [];
  
    return res.status(status).json({ message, extraDetails });
  };
  
  module.exports = errorMiddleware;
  