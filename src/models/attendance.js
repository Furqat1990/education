import { Schema, model } from 'mongoose';

let attendanceSchema = new Schema({
    student_id: {type:Schema.Types.ObjectId, required:true},
    day: { type:Number, required:true },
    month: { type:String, required:true },
    extant: { type:Boolean, default:false }
},
    {
        timestamps:true
    }
);

export default model('attendance', attendanceSchema);