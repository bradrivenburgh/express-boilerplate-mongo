const logger = require('./logger');

function validateAPIToken(req, res, next) {
  const apiToken = process.env.API_TOKEN; // Token to match
  const authToken = req.get('Authorization'); // Token sent with request

  // If auth token wasn't sent or is incorrect
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    logger.error(`Unauthorized request to path: ${req.path}`);
    return res.status(401).json({ error: `Unauthorized request` });
  }
  next(); // move to the next middleware
}

module.exports = validateAPIToken;
