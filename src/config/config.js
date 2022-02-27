module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_CONNECTION_STRING: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET_KEY,
    JWT_ACCESS_EXPIRATION_MINUTES: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    JWT_REFRESH_EXPIRATION_DAYS: process.env.JWT_REFRESH_EXPIRATION_DAYS,
    BCRYPT_SALT: process.env.BCRYPT_SALT
};
