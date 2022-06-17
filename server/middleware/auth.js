const authenticate = (req, res, next) => {
  if (!req.session.userId) {
    res.status(401).send("Khtm");
    return;
  }
  next();
};

module.exports = {
  authenticate,
};
