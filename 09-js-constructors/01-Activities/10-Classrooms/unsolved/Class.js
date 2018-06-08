var Student = require("./Student");

function Class(profName, roomNum){
    this.professor = profName;
    this.roomNumber = roomNum;
    this.students = [];
    this.countStudents = function(){
        return this.students.length;
    };
    this.addStudent = function(name,subject,grade){
        this.students.push( new Student(name,subject,grade));
    };
};

module.exports = Class;
