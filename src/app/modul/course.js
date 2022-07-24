const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Course = new Schema(
    {
        tittle: { type: String, required: true }, //required la cai bat buoc can nhap vao
        content: { type: String },
        image: { type: String },
        slug: { type: String },
        idvideo: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'tittle', unique: true },
    },
    {
        timestamps: true, // tu dong tra ve thoi gian create
    },
);

Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('course', Course); //tep trong mongoodb
