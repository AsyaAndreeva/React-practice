const path = require('path');
const userRouter = require('./user.js');

module.exports = (app) => {
  app.use('/api/users', userRouter);
  app.use('/api/**', (req, res) => res.sendFile(path.join(global.BASE_DIR, 'public/error-page.html')));
};
