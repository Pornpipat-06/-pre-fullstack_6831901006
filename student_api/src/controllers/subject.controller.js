const prisma = require('../prisma');

// ดึงข้อมูลวิชาทั้งหมด และค้นหาจากชื่อวิชา
exports.getAllSubjects = async (req, res) => {
    try {
        const search = req.query.search || '';

        const subjects = await prisma.subject.findMany({
            where: {
                name: { contains: search }
            },
            orderBy: { id: 'asc' },
        });

        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
};


// ดึงข้อมูลวิชาตาม ID
exports.getSubjectById = async (req, res) => {
    try {
        const subjectId = parseInt(req.params.id);

        const subject = await prisma.subject.findUnique({
            where: { id: subjectId },
        });

        if (!subject) {
            return res.status(404).json({
                message: 'Subject not found'
            });
        }

        res.json(subject);
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};


// เพิ่มวิชา
exports.createSubject = async (req, res) => {
    try {
        const {
            subjectCode,
            name,
            objective,
            description,
            theoryHours,
            practiceHours,
            credit,
            teacher
        } = req.body;

        if (!subjectCode || !name || !objective || !description || !teacher) {
            return res.status(400).json({
                message: 'Please Field Information'
            });
        }

        const newSubject = await prisma.subject.create({
            data: {
                subjectCode,
                name,
                objective,
                description,
                theoryHours: Number(theoryHours),
                practiceHours: Number(practiceHours),
                credit: Number(credit),
                teacher
            },
        });

        res.status(201).json(newSubject);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
};

// แก้ไขข้อมูลวิชา
exports.updateSubject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const {
            subjectCode,
            name,
            objective,
            description,
            theoryHours,
            practiceHours,
            credit,
            teacher
        } = req.body;

        const updatedSubject = await prisma.subject.update({
            where: { id },
            data: {
                subjectCode,
                name,
                objective,
                description,
                theoryHours: Number(theoryHours),
                practiceHours: Number(practiceHours),
                credit: Number(credit),
                teacher
            },
        });

        res.json(updatedSubject);
    } catch (error) {
        res.status(404).json({
            message: 'Subject not found'
        });
    }
};


// ลบวิชา
exports.deleteSubject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await prisma.subject.delete({
            where: { id }
        });

        res.json({
            message: 'ลบวิชารหัส ' + id + ' สำเร็จ'
        });
    } catch (error) {
        res.status(404).json({
            message: 'Subject not found'
        });
    }
};