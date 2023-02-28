import { Router } from 'express';
import adminController from '../controllers/admin.controller.js';

const router = Router();

router.get('/admin', adminController.login_page);
router.post('/login', adminController.admin_page);
router.get('/add', adminController.add_page);
router.post('/add-students', adminController.add);
router.get('/groups', adminController.groupsPage);
router.get('/course/:name', adminController.coursesPage);
router.get('/courses/:id', adminController.studentsPage);
router.get('/attendance', adminController.attendacePage);
router.get('/attendanceShedule/:id', adminController.attendace);

export default router;