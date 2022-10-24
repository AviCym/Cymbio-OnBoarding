import  {app} from '../index'
import express from 'express'


const healthCheck = (req:any, res:any, next:any) => res.sendStatus(200);
const router = express.Router();
router.get('/healthcheck', healthCheck);

export default router;
