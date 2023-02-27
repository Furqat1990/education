import { Schema, model } from 'mongoose';

let extraInfoSchema = new Schema({
    time: {type:String, required:true},
    day: {type:String, required:true},
    course: {type:String, required:true},
    hour: {type:String, required:true},
    duration: {type:String, required:true},
    start: {type:Date, default:Date.now()},
},
    {
        timestamps:true
    }
);

export default model('extraInfo', extraInfoSchema);