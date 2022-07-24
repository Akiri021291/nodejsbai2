const { mongooseToObject } = require('../../util/mongoose');
const Course = require('../modul/course'); // chú ý các biến của model len viêt hoa nhưng mình không hieu tại  sao

class CourseController {
    //get courses/:slug voi phuong thuc show
    create(req, res) {
        res.render('course/create'); // phương thức get để hiển thị form còn sử lí luu dữ liệu dùng action và phuonwg thức post
    }
    store(req, res, next) {
        const fromData = req.body;
        fromData.image = `http://img.youtube.com/vi/${fromData.idvideo}/sddefault.jpg`; //them anh tu truong id video
        //    res.json(rep.body) // phương thức sử lí tạo mới dữ liệu và luu dữ liệu bằng phưởng thức post
        const course = new Course(fromData);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render(
                    'course/show', // bien duoc chuyen vao theo phuong thuc cua mongoose lay trang view
                    { course: mongooseToObject(course) }, // dung phuong thuc chi co 1 phan tu duoc hien ra len khong su dung multi
                );
            })
            .catch(next);
    }
    edit(req, res, next) {
        Course.findOne({ _id: req.params._id })
            .then((course) => {
                res.render(
                    'course/edit', // bien duoc chuyen vao theo phuong thuc cua mongoose lay trang view
                    { course: mongooseToObject(course) }, // dung phuong thuc chi co 1 phan tu duoc hien ra len khong su dung multi
                );
            })
            .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params._id }, req.body)
            .then(() => {
                res.redirect(
                    '/me/stored/course', // bien duoc chuyen vao theo phuong thuc cua mongoose lay trang view
                    // dung phuong thuc chi co 1 phan tu duoc hien ra len khong su dung multi
                );
            })
            .catch(next);
    }
    destroy(req, res, next) {
        // phan edit nay khong dung thi phai nhung khong ro lam
        Course.delete({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    forcedestroy(req, res, next) {
        // phan edit nay khong dung thi phai nhung khong ro lam
        Course.deleteOne({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        // phan edit nay khong dung thi phai nhung khong ro lam
        Course.restore({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[post]course/hand-form-action
    handfromaction(req, res, next) {
        switch (
            req.body.action // chuyen vao body action cua chuoi json (req.body) in ra cai nay de xem res.json(req.body)
        ) {
            case 'delete': // neu action bang delete thi sex chay phuong thuc xoa
                Course.delete({ _id: { $in: req.body.courseIds } }) // bien coureseids duoc chuyen vao qua name va value
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default: // ngoai ra thi no chay cai nay
                res.json('massage'); // bien duoc chuyen vao theo phuong thuc cua mongoose lay trang view
        }
    }
}
module.exports = new CourseController();
