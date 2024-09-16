const { PORT, USER, PASSWORD, DB_NAME } = process.env;

const productionConnection = `mongodb+srv://${USER}:${PASSWORD}@db.exhqa.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
  port: PORT || 3005,
  dbConnection: `${productionConnection}`,
};
