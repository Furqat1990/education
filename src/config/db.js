import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
export function Db() {
    mongoose.connect("mongodb://127.0.0.1/course", { useNewUrlParser:true, useUnifiedTopology:true });
}
