/** packages */
const mongoose = require("mongoose"); //Leer el paquete mongoosee


/**  Schema creation */
const groupSchema = new mongoose.Schema({

    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_course", //Coleccion de cursos
        required: true
    },
    period_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_period", //Coleccion de periodos
        required: true
    },
    teacher_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_teacher", //Coleccion de profesores
        required: true
    },
    number: {
        type:"number",
        required: true,
    }
});

/** Schema exportation */
module.exports = groupSchema;