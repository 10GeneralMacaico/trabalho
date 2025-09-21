import * as hoteis from "../repository/hoteisRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/hotel', async (req, resp) => {
    let registros = await hoteis.pesquisarHotel();
    resp.send(registros);
})

endpoints.get('/hotel/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await hoteis.filtrarPorNomeH(nome);
  resp.send(registros);
})

endpoints.post('/hotel/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await hoteis.inserirHotel(novo);
    resp.send({ novoI: id });
})

endpoints.put('/hotel/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await hoteis.alterarHotel(id, novo);
    resp.send();
})

endpoints.delete('/hotel/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await hoteis.deletarHotel(id);
    resp.send();
})

endpoints.get('/hotel/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await hoteis.pesquisarHotelId(id);
    resp.send(novo);
})

export default endpoints;


