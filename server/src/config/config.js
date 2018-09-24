module.exports = {
    secret: 'mysecret', // I will reveal my secret key since this is only a development application.
    development: {
        username: 'tabtracker',
        password: null,
        database: 'tabTracker',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};
