import { DataTypes } from "sequelize";
import db from "../application/db.js";

const User = db.define('users',{
  username: {
    primaryKey: true,
    type: DataTypes.STRING(45)
  },
  password: {
    type: DataTypes.STRING(45)
  },
  email: {
    type: DataTypes.STRING
  }
})

export default User;