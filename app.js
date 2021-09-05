/** Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** configuración de la app */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser)
const db = require("./model/db-connection/mongodb.js")
db()
const ipFn = require("./middleware/getIpAddress");
app.use("*",ipFn);

/** Methods */   //req es request , res es response o respuesta
app.get("/",(req,res,next)=>{
    res.send("Welcome to academic rest api");
});

// Users routes loading
const userRoutes = require("./routes/user.routes.js");
userRoutes(app);

// token middleware
// const tkFn = require("./middleware/verifyToken");
// app.use(tkFn)

// Student routes loading
const studentRoutes = require("./routes/student.routes.js");
studentRoutes(app);

// Teacher routes loading
const teacherRoutes = require("./routes/teacher.routes.js");
teacherRoutes(app);

// Period routes loading
const periodRoutes = require("./routes/period.routes.js");
periodRoutes(app);

// Course routes loading
const courseRoutes = require("./routes/course.routes.js");
courseRoutes(app);

// Group routes loading
const groupRoutes = require("./routes/group.routes.js");
groupRoutes(app);


app.listen(port, ()=>{
    console.log("Server is running...");
})