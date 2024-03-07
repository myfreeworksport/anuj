const envVariable = require("./config/default.json")
const app = require("express");
const models = require("./models/index");
const DB = require("./database/sequlizedb");

DB.initialize(initialize);
for(let prop of Object.keys(DB)){
    if(prop !== "initialize"){
        DB[prop] = models.attachModel(DB[prop].sequelize, DB[prop].sequelize)
    }
}

app.use("/api", routerConfig())