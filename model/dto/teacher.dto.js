/** packages */

const mongoose = require("mongoose"); //Leer el paquete mongoosee

/** Using schema */

const schema = require("../schemas/teacher.schema");

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
const dto = mongoose.model("coll_teacher", schema);
module.exports = dto