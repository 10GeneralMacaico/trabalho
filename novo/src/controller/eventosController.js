import * as carro from "../repository/eventosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/evento', async (req, resp) => {
    let registros = await carro.pesquisarEvento();
    resp.send(registros);
})

endpoints.post('/evento/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await carro.inserirEvento(novo);
    resp.send({ novoI: id });
})

endpoints.put('/evento/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await carro.alterarEvento(id, novo);
    resp.send();
})

endpoints.delete('/evento/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await carro.deletarEvento(id);
    resp.send();
})

endpoints.get('/evento/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await event.pesquisarEventoId(id);
    resp.send(novo);
})

export default endpoints;
