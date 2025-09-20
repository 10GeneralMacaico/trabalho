import express from 'express';
import AddRotas from './router.js;

const api = express();
api.use(express.json());

AddRotas(api);

api.listen(5878, ()=> console.log('subiu'));
