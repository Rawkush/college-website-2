const error = (error, req, res, next) => {
  res.status(500).send('something went wrong');
  next();
};

module.exports = {
  error,
};
