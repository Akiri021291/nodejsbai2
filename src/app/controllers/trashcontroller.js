const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../modul/course');

class trashController {
    //get stored
    trash(rep, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new trashController();
