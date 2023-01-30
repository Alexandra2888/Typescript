// numeric enums
const enum RollNumbers {
John,
Kelly,
Sandra,
Joseph,
Samantha
}
let studentList: RollNumbers = RollNumbers.Sandra;

//string enum types
// const enum StudentDetails {
//     Name = "John",
//     Major = "Arts"
// }
// let studentName: StudentDetails = StudentDetails.Name; 

//heterogenous enums
const enum StudentDetails {
    ID = 1,
    Name = "John",
    Major = "Arts"
}
let studentName: StudentDetails = StudentDetails.Name; 
let studentId: StudentDetails = StudentDetails.ID;