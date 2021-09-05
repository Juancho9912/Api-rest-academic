/** packages */ 

const mongoose = require("mongoose"); //Leer el paquete mongoosee
const config = require("config"); // leer el paquete config para utilizar lo que tiene


const mongodbInfo = config.get("db-connections.mongodb");
const connectionString = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`
//ConnectionString = 'mongodb+srv://acad_rest_api_user:Ddu0CXHjiy0ZurG4@cluster0.3omn2.mongodb.net/AcademicDB?retryWrites=true&w=majority'

module.exports = () =>{
    mongoose.connect(connectionString);

    mongoose.connection.on("connected", ()=>{
        console.log("mongodb server connected!");
    })
    mongoose.connection.on("disconnected", ()=>{
        console.log("mongodb server disconnected!");
    })
    mongoose.connection.on("error", ()=>{
        console.log("mongodb server error!");
    })
    mongoose.connection.on("SIGINT", ()=>{
        mongoose.connection.close(()=>{
            console.log("mongodb server shutting down");
        })
    })
    
}

