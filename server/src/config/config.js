module.exports = {
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
