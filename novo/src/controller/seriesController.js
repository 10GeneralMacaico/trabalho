import * as serie from "../repository/seriesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/series', async (req, resp) => {
    let registros = await serie.pesquisarSeries();
    resp.send(registros);
})

endpoints.get('/series/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await serie.filtrarPorNomeS(nome);
  resp.send(registros);
})

endpoints.post('/series/enviar', async (req, resp) => {
    let novo = req.body;
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

endpoints.put('/series/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarSeries(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/series/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarSeries(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/series/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarSeriesId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/series/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeS(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})

export default endpoints;
