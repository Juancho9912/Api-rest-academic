/** packages */

const mongoose = require("mongoose"); //Leer el paquete mongoosee

/** Using schema */

const schema = require("../schemas/student_group.schema");

schema.statics = {
    create: function(data,callback){
        let doc = new this(data);
        doc.save(callback);
    },
    getAll: function(query,callback){
        this.find(query, callback);
    },
    getByCode: function(query,callback){
        this.find(query, callback);
    },
    update: function(query,data,callback){
        this.findOneAndUpdate(query,{$set:data},{new: true}, callback);
    },
    delete: function(query,callback){
        this.findOneAndDelete(query,callback);
    },

};
const dto = mongoose.model("coll_student_group", schema);
module.exports = dto