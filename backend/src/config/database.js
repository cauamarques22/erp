require("dotenv").config()

//databaseConfig
//são as configurações do banco de dados
module.exports = {
    dialect: "mysql", //dialeto varia de projeto pra projeto
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        "createdAt": "created_at",
        "updatedAt": "updated_at",
    },
    dialectOptions: {
        timezone: "local"
    },
    timezone: "local"
}