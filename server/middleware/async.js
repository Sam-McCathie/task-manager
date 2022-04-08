const asyncWrapper = (f) => {
  return async (req, res, next) => {
    try {
      await f(req, res, next);
    } catch (error) {
      next(error); // passed to the next middleware "errorHandlerMiddleware"
    }
  };
};

export {asyncWrapper};
