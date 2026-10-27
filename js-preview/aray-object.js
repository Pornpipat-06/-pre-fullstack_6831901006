//Array 
const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการแสดงผลลัพธ์ที่อัพเดท ${students} จำนวนรายชื่อ ${students.length}คน`);

// object
const student = {
    id: 101,
    name: "Ice",
    age: 18,
    major: "Information Technology",
};
console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);

//Array and Object
const studentList = [
    {id: 101, name: "Ice", age: 20, major:"IT"},
    {id: 102, name: "Ball", age: 19, major:"CG"},
    {id: 103, name: "Korn", age: 30, major: "IT"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่ในการแสดงผล 
const names = studentList.map((s) => `ไอดี ${s.id} ชื่อ ${s.name} อายุ ${s.age} ปี สาขา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);


const isStudents = studentList.filter((s) => s.major === "IT");
console.group(`กรองข้อมูล ${isStudents.length}`);

// find : หาตัวแรก(ตัวอักษร ตัวเลข)ที่ตรงเงื่อนไข
const found = studentList.find((s) => s.id === 103);
console.log("ผลการค้นหา", found);
console.log(`ผลการค้นหา ${found.name}`);

//ค้นหาจากชื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ่
const keyword = "i";
const searchResult = studentList.filter((s) => s.major.toLowerCase().includes((keyword.toLowerCase())));
console.log(`ผลการค้นหา : ${keyword}`, searchResult.map((s) => s.major));

const keyword2 = "ba";
const searchResult2 = studentList.filter((s) => s.name.toLowerCase().includes((keyword2.toLowerCase())));
console.log(`ผลการค้นหา : ${keyword2}`, searchResult2.map((s) => s.name));