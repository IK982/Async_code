import pg from "pg";
import promptSync from 'prompt-sync';
import Knex from "knex";



// create new client
const client = Knex({

    client: "pg",
    connection:{
            user: "postgres",
            host: "localhost",
            database: "student_database",
            password: process.env.POSTGRES_PASSWORD,
            port: 5432
    }

});
    
// Show the students in a class (ordered by mark)


// Show the classes for a given teacher

// const prompt = (promptSync())
// const name = prompt("Please enter a name: ")

// client('class')
// .select('class.year','class.subject', 'teacher.title', 'teacher.last_name')
// .from('class').leftOuterJoin('teacher', 'class.teacher', 'teacher.id')
// .where('teacher.last_name', name)
// .then(response => console.log(response));


// .insert({name: name, head_of_house: 3, points: 261})
// .then(response => console.log(response));








// Find students matching a given last name

// const prompt = promptSync();
// const name = prompt("Please enter your last name: ");
// client.query(`SELECT * FROM student WHERE last_name LIKE '${name}'`)
// .then(response => console.log(response.rows))
// .finally (()=> client.end());


// Get students based on a guardian's name
 const getStudentName = (name) => {
    return client('student')
        .select('student.first_name', 'student.last_name', 'guardian.last_name')
        .from('guardian').leftOuterJoin('student', 'guardian.id', 'student.guardian')
        .where('guardian.last_name', name)

}


const getHouseList = () => {
    return client('house')
        .select()
}

const addNewHouse = (house1) => {
    return client('house')
        .insert({name: house1.name, head_of_house: 3 , points: 0})
}
// .then(response => console.log(response));

// const prompt = (promptSync())
// const name = prompt("Please enter a last name: ")
//OR

// client('guardian')
// .select()
// .join('student', 'guardian.id', '=', 'student.guardian')
// .where('guardian.last_name', name)
// .then(response => console.log(response))


// Create a new House
// const prompt = (promptSync())
// const name = prompt("Please enter a new house name: ")

// client('house')
// .insert({name: name, head_of_house: 3, points: 261})
// .then(response => console.log(response));


// const prompt = promptSync();
// console.log("please enter a number between 1 and 5")
// console.log("1 - Find students matching a given last name")
// console.log("2 - Get students based on a guardian's name ")
// console.log("3 - Create a new House ")
// console.log("4 - Show the classes for a given teacher. ")
// console.log("5 - Show the students in a class (ordered by mark) ")
// const option = prompt("Please choose your option: ")
// if (option == 1 ){
// const name = prompt("Please enter your last name: ");
// client('student')
// .select()
// .where('last_name', name)
// .then(response => console.log(response));
// }
// if (option == 2 ){
//     const name = prompt("What is your guardian's name: ");




//connect that client to the database
// client.connect();
// make our query
// get the results from the query

// close down our client

// const studentNames = `SELECT * FROM student WHERE last_name LIKE '${name}'`



// client
// .query('SELECT COUNT(*) FROM student')
// .then(response => console.log(response.rows[0])) 
// .finally(() => client.end());

// const prompt = (promptSync())
// const name = prompt("Please enter a last name: ")

export default {
    getStudentName: getStudentName, getHouseList: getHouseList, addNewHouse: addNewHouse
}