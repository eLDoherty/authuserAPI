import conn from "./app/config/Database.js";

export const existName = async (username) => {

    const sql = `SELECT * FROM users WHERE username="${username}"`;
    const dataUser =  await conn.query( sql );

    return dataUser[0][0] ? true : false;
    

}

export const existEmail = async (email) => {

    const sql = `SELECT * FROM users WHERE email="${email}"`;
    const dataEmail = await conn.query(sql);

    return dataEmail[0][0] ? true : false;

}

