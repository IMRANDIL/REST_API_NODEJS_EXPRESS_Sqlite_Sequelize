const { DataTypes } = require('sequelize/dist');
const sequelize = require('../db/db');


const Post = sequelize.define('post', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING(100)
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING

    }
})


module.exports = Post;