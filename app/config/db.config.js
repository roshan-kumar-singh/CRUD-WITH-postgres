module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Roshan@123",
    DB: "nodeapp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };