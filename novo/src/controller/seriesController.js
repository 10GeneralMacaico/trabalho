import * as serie from "../repository/seriesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/series', async (req, resp) => {
    let registros = await serie.pesquisarSeries();
    resp.send(registros);
})

endpoints.post('/series/enviar', async (req, resp) => {
    let novo = req.body; // {titulo, ano_lancamento, genero, temporadas, criador, avaliacao}
    let id = await serie.inserirSeries(novo);
    resp.send({ novoI: id });
})

endpoints.put('/series/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await serie.alterarSeries(id, novo);
    resp.send();
})

endpoints.delete('/series/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await serie.deletarSeries(id);
    resp.send();
})

endpoints.get('/series/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await serie.pesquisarSeriesId(id);
    resp.send(novo);
})

export default endpoints;
