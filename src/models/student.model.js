import { Schema, model } from 'mongoose';

let studentSchema = new Schema({
    name: {type:String, required:true},
    sure: {type:String, required:true},
    payment: {type:Number, default:0},
    group_id: {type:Schema.Types.ObjectId, ref:'extraInfo', required:true}
},
    {
        timestamps:true
    }
);

export default model('students', studentSchema);