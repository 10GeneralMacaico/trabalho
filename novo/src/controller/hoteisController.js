import * as usuario from "../repository/hoteisRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/hotel', async (req, resp) => {
    let registros = await usuario.pesquisarHotel();
    resp.send(registros);
})

endpoints.get('/usuarios/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await usuario.filtrarPorNomeU(nome);
  resp.send(registros);
})

endpoints.post('/hotel/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await usuario.inserirHotel(novo);
    resp.send({ novoI: id });
})

endpoints.put('/hotel/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await usuario.alterarHotel(id, novo);
    resp.send();
})

endpoints.delete('/hotel/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await usuario.deletarHotel(id);
    resp.send();
})

endpoints.get('/hotel/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await usuario.pesquisarHotelId(id);
    resp.send(novo);
})

export default endpoints;

