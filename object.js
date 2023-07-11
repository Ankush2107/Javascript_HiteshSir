// Destructuring Object

const course = {
    coursename : "Javascript",
    price : "999",
    courseInstructor : "HiteshSir"
};

console.log(course.courseInstructor);

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor : ins} = course;
console.log(ins);

// {
//     "name" : "hitesh",
//     "coursename" : "Javascript",
//     "price" : "free"2
// }
