const {Schema , model} = require ("mongoose");

const serviceSchema = new Schema({
name :{ type :String , required : true},
age :{ type :String , required : true},
});

const Service = new model ("Service" , serviceSchema)

module.exports = Service;