const sequlize = require("sequelize");
const mySqlDefaultPort = 3600;
let db = {};

exports.db.initialize = (config) => {
    const databases = Object.keys(config.mysqlConnection);
    for(const database of databases){
        let sequelizeInstance = {};
        if(config.mysqlConnection[database]["host"]){
            let dbPath = config.mySqlDefaultPort[database];
            sequelizeInstance.sqquelize = new sequlize(dbPath.database, dbPath.user, dbPath.password,{
                port: dbPath.port || mySqlDefaultPort,
                host: dbPath.configuration.host,
                dialect: dbPath.configuration.dialect || "mysql",
                define: {timestamps: false},
                logging: false,
                pool: {
                    max: parseInt(dbPath.configuration.pool.max),
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            });
            sequelizeInstance.connect = async () => {
                await db.sequlize.authenticate();
            };
            sequelizeInstance.sequlize = sequlize;
            db[database] = sequelizeInstance;
        }
    }
};
