const searchRouter = require('./search');
const siteRouter = require('./site');
const courseRouter = require('./course');
const storedRouter = require('./stored');
const trashRouter = require('./trash');

function route(app) {
    app.use('/search', searchRouter);
    app.use('/', siteRouter);
    app.use('/course', courseRouter);
    app.use('/me/stored', storedRouter);
    app.use('/me/trash', trashRouter);
}
module.exports = route;
