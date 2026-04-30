import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import 'dotenv/config';


const router = Router();

router.get('/', (req, res) => {
    return res.status(StatusCodes.OK).send('Hello, World!');
});

export { router };