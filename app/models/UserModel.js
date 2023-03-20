import { Sequelize } from "sequelize";
import conn from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = conn.define('users', {
    email: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, { freezeTableName: true, timestamps: false, createdAt: false });

(async () => {
    await conn.sync();
});

export default Users;