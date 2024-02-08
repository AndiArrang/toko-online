import db from "../application/db.js";
import { DataTypes } from "sequelize";

const Category = db.define('categories',{
    category_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
})

export default Category