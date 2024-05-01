let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function () { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
}

const A = student.name;
const B = student['Grad Year'];
const C = student.greeting();
const D = student['Favorite Teacher'].name;
const E = student.courseLoad[0];
