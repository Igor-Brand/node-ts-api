import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import 'dotenv/config';

import { CidadesController } from "../controllers";

const router = Router();

router.get('/', (req, res) => {
    return res.status(StatusCodes.OK).send('Hello, World!');
});

router.post('/cidades', CidadesController.create);

export { router };