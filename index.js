import express from "express";

const app = express()

app.set("view engine", "ejs");

// app.get("/st", (req, res) => {
//     res.send("Welcome to To_do list");
// });

const todos = [{
        todoId : "1",
        todoTask : "Code",
    },
    {
        todoId : "2",
        todoTask : "Assignment",
    },
    {
        todoId : "3",
        todoTask : "Default",
    },
    {
        todoId : "4",
        todoTask : "UI/UX",
    },
    {
        todoId : "5",
        todoTask : "Project",
    }
        
];

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", function (req, res) {
    res.render("index", {
        data: todos,
    });
});
 
app.post("/delete", (req, res) => {
    var requestedtodoId = req.body.todoId;
    var j = 0;
    todos.forEach((todo) => {
        j = j+1;
        if (todo.todoId === requestedtodoId) {
            todos.splice(j-1, 1);
        }
    });
    res.redirect("/");
});
 

app.post("/", (req, res) => {
    const inputTodoId = todos.length+1;
    const inputTodoTask = req.body.todoTask;
 
    todos.push({
        todoId: inputTodoId,
        todoTask: inputTodoTask
    });
 
    res.render("index", {
        data: todos,
    });
});
 


app.listen(3000, (req, res) => {
    console.log("App is running on port 3000");
});