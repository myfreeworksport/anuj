const express = require("express");
const router = express.Router();
const envVariable = require("./config/default.json");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./SwaggerConfig");


exports.routerConfig = () => {
    router.use("/adminservice", require("./api/AdminService"));
    router.use("/apidocs", swaggerUi.serve, swaggerUi.setUp(null, {explorer: true, swaggerUrls: [{url:"/api/generate-json/v1", name: "v1"}]}));
    router.get("/generate-json/:apiVersion", (req, res) => 
    res.status(200).json(swaggerConfig["v1"]));
    router.use(errorHandler(envVariable));
    return router;
}