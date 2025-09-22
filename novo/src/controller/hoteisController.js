import * as hoteis from "../repository/hoteisRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/hotel', async (req, resp) => {
    let registros = await hoteis.pesquisarHoteis();
    resp.send(registros);
})

endpoints.get('/hotel/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await hoteis.filtrarPorNomeH(nome);
  resp.send(registros);
})

endpoints.post('/hotel/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await hoteis.inserirHoteis(novo);
    resp.send({ novoI: id });
})

endpoints.put('/hotel/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await hoteis.alterarHoteis(id, novo);
    resp.send();
})

endpoints.delete('/hotel/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await hoteis.deletarHoteis(id);
    resp.send();
})

endpoints.get('/hotel/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await hoteis.pesquisarHoteisId(id);
    resp.send(novo);
})

endpoints.put('/hotel/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarHoteis(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/hotel/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarHoteis(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/hotel/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarHoteisId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/hotel/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeH(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})


export default endpoints;
