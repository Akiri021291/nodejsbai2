const course = require('../modul/course');

class SiteController {
    //get home
    home(rep, res) {
        res.render('home');
    }
    test(rep, res) {
        course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ Error: 'error!!' });
            }
        });
    }
}
module.exports = new SiteController();
