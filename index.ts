// if and if elas: mark sheet:
let chemistyMarks: number = 77;
let physicsMarks: number = 80;
let englishMarks: number = 84;
let urduMarks: number = 76;
let mathMarks: number = 86;
let totalMarks: number = 500;
let obtainedMarks =
chemistyMarks + physicsMarks + englishMarks + urduMarks + mathMarks;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("Marks Sheet");
console.log("Chemistry Marks",chemistyMarks);
console.log("physics Marks", physicsMarks);
console.log("English Marks",englishMarks);
console.log("Urdu Marks",urduMarks);
console.log("Math Marks",mathMarks);
console.log("Obtained Marks",obtainedMarks);
console.log("Percantage",percentage.toFixed(2)+ "%");
if (percentage >= 80 ){
    console.log("Grade A+");
} else if (percentage >= 70){
    console.log("Grade A");
}else if (percentage >= 60 ){
    console.log("Grade B");
}else if (percentage >= 50){
    console.log("Grade C");
}else "failed"
