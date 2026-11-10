const prisma = require('../prisma');

// ดึงข้อมูลทั้งหมด และ ค้นหาจากชื่อ
exports.getAllStudents = async (req, res) => {
    try {
        const search = req.query.search || '';
        const students = await prisma.student.findMany({
            where: { name: { contains: search}},
            orderBy: { id: 'asc'},
        });
        res.json(students); 
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
}

exports.getStudentById = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
        const student = await prisma.student.findUnique({
            where: { id: studentId },
        });
        if (!student) {
            return res.status(404).json({ message: 'Students not found' });
        }
        res.json(student);
    } catch {
        res.status(500).json({message : 'Internal server error'});
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, age, major } = req.body;
        if (!name || !age || !major) {
            return res.status(400).json( {message : 'Please Field Information'});
        }

        const newStudent = await prisma.student.create({
            data: { name, age : Number(age), major },
        });

        res.status(201).json(newStudent);
    } catch {
        res.status(500).json( {message : 'Fail'} );
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, age, major } = req.body;

        const updatedStudent = await prisma.student.update({
            where: { id },
            data: {
                name,
                age: Number(age),
                major
            },
        });

        res.json(updatedStudent);
    } catch (error) {
        res.status(404).json({ message: 'Student not found' });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await prisma.student.delete({
            where: { id }
        });

        res.json({ message: 'ลบนักศึกษารหัส ' + id + ' สำเร็จ' });
    } catch (error) {
        res.status(404).json({ message: 'Student not found' });
    }
};