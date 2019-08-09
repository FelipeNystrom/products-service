const productsRoutes = require('./productsRoutes');
const categoryRoutes = require('./categoryRoutes');

module.exports = server => {
  server.use(productsRoutes);
  server.use(categoryRoutes);
};
