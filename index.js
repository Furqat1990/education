import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import layout from 'express-ejs-layouts';

import homeRouter from './src/routers/home.router.js';
import adminRouter from './src/routers/admin.router.js';
import { Db } from './src/config/db.js';

Db();

const app = express();
const FULL_PATH = dirname(fileURLToPath(import.meta.url));
global.full_path = FULL_PATH;

app.set('views', join(FULL_PATH, 'src', 'views'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static(join(FULL_PATH, "public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(layout);

app.use('/', homeRouter);
app.use('/', adminRouter);

app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server is running on PORT:${app.get('port')}`);
});