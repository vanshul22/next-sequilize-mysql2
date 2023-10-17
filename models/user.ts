import { DataTypes } from 'sequelize';
import { sequelize } from '../db/config';

// user post is tablename...
export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { tableName: "users_table" });