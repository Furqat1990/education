import AdminHelper from '../helpers/admin.helper.js';

class Admin {
    login_page(req, res) {
        res.render('admin/login.ejs', { title:"Login Page", req:"admin"});
    }

    admin_page(req, res) {
        res.render('admin/admin.ejs', { title:"Admin Page", req:"admin"});
    }

    add_page(req, res) {
        res.render('admin/add.ejs', { title:"Add Page", req:"admin"});
    }

    add(req, res) {
        try {
            AdminHelper.add(req, res);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    groupsPage(req, res) {
        try {
            AdminHelper.groups(req, res);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    coursesPage(req, res) {
        try {
            AdminHelper.courses(req, res);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    studentsPage(req, res) {
        try {
            AdminHelper.students(req, res);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    attendacePage(req, res) {
        try {
            AdminHelper.attendace(req, res);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new Admin();