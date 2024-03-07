const swaggerJSDoc = require("swagger-jsdoc");
const documentationRoot = `${__dirname}/apiDocs`;
const commonAuthSchema = {
    type: "apiKey",
    name: "x-access-token",
    in: header
}