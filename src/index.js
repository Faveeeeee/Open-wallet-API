import Express from 'express'
import { students } from './Models/data.js/index.js';
import { config } from './Config/env.js'
import { studentRouter } from './routes/studentRoutes.js';





const app = Express();

app.use(Express.json())

app.use(studentRouter)

const logger = (req, res, next) =>{
    const date = new Date().toISOString();
    console.log(`this req was performed on ${date} and the method is ${req.method},
    the url is ${req.url}`);
     next();

}


app.use(logger)


app.post('/login', (req, res) =>{

    const {name, email, matricNo} = req.body
app.listen(config.port, () =>{
    console.log(`Server running on port ${config.port}`);
})

    const student = {
        id: students.length + 1,
        name: name,
        email: email,
        matricNo: matricNo
    }

    students.push(student)
// const logger = (req, res, next) =>{
//     const date = new Date().toISOString();
//     console.log(`this req was performed on ${date} and the method is ${req.method},
//     the url is ${req.url}`);
//      next();
// }


    res.status(201).json({
        message: 'student created successfully',
        student: student,
        data: students
    })
})

app.get('/students', (req, res) =>{
    res.send(students);
})
// app.get('/students', (req, res) =>{
//     res.send(students);
// })

app.get('/hello/:name', logger, (req, res) =>{
    const name = req.params.name

    res.send({
        name: name,
    });
})
// app.get('/hello/:name', logger,(req, res) =>{
//     const name = req.params.name
//     console.log(config.port)
//     res.send({
//         name: name, 
//     });
// })


app.listen(3000, () =>{
    console.log(`Server running on port 3000`);
})


// app.get('/', (req, res) =>{
//     res.send('hello this is my first express app');
// })

// app.get('/hello/:name/:age', (req, res) =>{
//     console.log(req.params.age)
//     res.send({
//         name: req.params.name,

//     });
// })

// app.get("/students", (req, res) =>{

//     res.send({
//         students: students
//     })
// })

// app.get("/student/:id", (req, res) =>{

//     const id1 = parseInt(req.params.id)

//     const foundStudent = students.find((student) => student.id === id1)

//     if (!foundStudent){
//         res.send({
//             message: "student not found"
//         })
//     }

//     const {id, ...data} = foundStudent
//     res.status(202).send({
//         code : 200,
//         data: data
//     })
// })


// app.post("/students", (req, res) =>{

//     console.log(req.body)
//     const {id, name, email} = req.body

//     const student = {
//         id: id,
//         name: name,
//         email, email
//     }

//     students.push(student)

//     res.status(201).send({
//         code: "201",
//         data: students
//     })
    

// })


// app.listen(3001, () =>{
//     console.log(`Server running on port 3000`);
// })