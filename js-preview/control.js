//เงื่อนไข และ วนซ้ำ

function checkScore(score){
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(`75 คะแนน ${checkScore(75)}`);
console.log(`49 คะแนน ${checkScore(49)}`);

const result = 62 >= 50 ? "Pass" : "Fail";
console.log(`62คะแนน ${result}`);

for (let i = 1; i <= 10; i++) {
    console.log(`รอบที่ ${i}`);
}

