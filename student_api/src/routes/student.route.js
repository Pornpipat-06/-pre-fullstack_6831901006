const express = require('express');
const studentController = require('../controllers/student.controller');
const router = express.Router();

router.get('/', studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);

// แก้ไขข้อมูลนักศึกษา
router.put("/:id", studentController.updateStudent);

// ลบนักศึกษา
router.delete("/:id", studentController.deleteStudent);

module.exports = router;