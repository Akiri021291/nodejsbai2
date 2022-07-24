const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../modul/course');
//me/stored/course
class StoredController {
    //get stored
    stored(rep, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})]) // cach chuyen 2 bien vao trong
            .then(([courses, deleteCount]) =>
                res.render('me/stored-course', {
                    courses: mutipleMongooseToObject(courses),
                    deleteCount,
                }),
            )
            .catch(next);
        // thay cho 2 cai ben duoi thi dung poromis boi ham bat dong bo len khong the chuyen 2 bien vao trong 1
        //         Course.countDocumentsDeleted()
        //         .then(adeleteCount =>
        //         {
        // console.log(adeleteCount)
        //         })

        //        Course.find({})
        //             .then (courses=>res.render('me/stored-course',{
        //                 courses:mutipleMongooseToObject(courses)
        //             }))
        //             .catch (next)
    }
}
module.exports = new StoredController();
