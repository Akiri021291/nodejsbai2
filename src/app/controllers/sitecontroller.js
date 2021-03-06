const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../modul/course');

class SiteController {
    //get home
    home(rep, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new SiteController();
