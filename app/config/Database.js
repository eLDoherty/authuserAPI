import { Sequelize } from "sequelize";

const conn = new Sequelize('express', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default conn;    