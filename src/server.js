require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
// const logger = require('./config/logger');

let server;
mongoose.connect(config.DB_CONNECTION_STRING).then(() => {
    // logger.info('Connected to MongoDB');
    console.log('DB connected successfully');
    server = app.listen(config.PORT, () => {
        console.log(`App is running on port ${config.PORT}`);
        // logger.info(`Listening to port ${config.port}`);
    });
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            // logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = error => {
    // logger.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    // logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});