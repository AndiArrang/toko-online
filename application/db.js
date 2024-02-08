import { Sequelize } from "sequelize";

const db = new Sequelize('toko_online','root','garuda3710', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;