const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/coursecontroller');

// lay phuong thuc
router.patch('/:_id/restore', courseController.restore); // phuong thuc la show
router.delete('/:_id/force', courseController.forcedestroy); // phuong thuc la show
router.delete('/:_id', courseController.destroy); // phuong thuc la show
router.put('/:_id', courseController.update); // phuong thuc la show
router.post('/hand-form-action', courseController.handfromaction); // phuong thuc la show
router.post('/store', courseController.store); // phuong thuc la show
router.get('/create', courseController.create); // phuong thuc la show
router.get('/:slug', courseController.show); // phuong thuc la show
router.get('/:_id/edit', courseController.edit); // phuong thuc la show

module.exports = router;
