import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(process.env.DATABASE_NAME || "", process.env.USER_NAME || "", process.env.PASSWORD || "",
    {
        host: process.env.HOSTNAME || "",
        dialect: "mysql",
        dialectModule: require("mysql2")
    });

sequelize.authenticate().then(() => {
    console.log('Connection to database has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to database:', err);
});

export { sequelize };