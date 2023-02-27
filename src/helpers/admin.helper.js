import Student from '../models/student.model.js';
import ExtraInfo from '../models/extraInfo.model.js'

class AdminHelper {
    async add(req, res) {
        const namesAndSures = Object.entries(req.body)
                            .filter(person => person[0]
                                .includes('name') || person[0]
                                .includes('sure'));
        
        const extraInfoArr = Object.entries(req.body)
                            .filter(person => !person[0]
                                .includes('name') && !person[0]
                                .includes('sure'));

        const extraInfoObj = Object.fromEntries(extraInfoArr);
        const extraInfo = await ExtraInfo.create(extraInfoObj);

        for (let i = 0; i < namesAndSures.length; i += 2) {
            let student = new Student({
                name: namesAndSures[i][1],
                sure: namesAndSures[i + 1][1],
                group_id: extraInfo._id
            });

            await student.save();
            console.log(student);
        }                        

        res.redirect('/add');
    }

    async groups(req, res) {
        let group = await ExtraInfo.aggregate([
            {
                $group: { _id: "$course", count: { $sum: 1 } }
            }
        ])

        res.render('admin/groups.ejs', { title:"Groups Page", req:"admin", group});
    }

    async courses(req, res) {
        let name = req.params.name;
        let countCourse = await ExtraInfo.find({ course:name });

        res.render('admin/courses.ejs', { title:"Count Courses Page", req:"admin", countCourse});
    }

    async students(req, res) {
        let id = req.params.id;
        let std = await Student.find({ group_id:id });
    
        res.render('admin/students.ejs', { title:"Students Page", req:"admin", std});
    }

    async attendace(req, res) {
        let names = ['Arslon', 'Islom', 'Baxtiyor', 'Muhammad'];
        res.render('admin/attendance.ejs', { title:"Attendance Page", req:"admin", names});
    }
}

export default new AdminHelper();