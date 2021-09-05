/** packages */
const mongoose = require("mongoose"); //Leer el paquete mongoosee


/**  Schema creation */
const student_groupSchema = new mongoose.Schema({

    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_student", //Coleccion de estudiantes
        required: true
    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_group", //Coleccion de grupos
        required: true
    }
});

/** Schema exportation */
module.exports = student_groupSchema;