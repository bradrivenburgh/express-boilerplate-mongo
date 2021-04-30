const morganOptions = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL,
  morganOptions,
};
