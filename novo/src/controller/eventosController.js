import * as event from "../repository/eventosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/evento', async (req, resp) => {
    let registros = await event.pesquisarEvento();
    resp.send(registros);
})

endpoints.get('/evento/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await event.filtrarPorNomeE(nome);
  resp.send(registros);
})

endpoints.post('/evento/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await event.inserirEvento(novo);
    resp.send({ novoI: id });
})

endpoints.put('/evento/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await event.alterarEvento(id, novo);
    resp.send();
})

endpoints.delete('/evento/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await event.deletarEvento(id);
    resp.send();
})

endpoints.get('/evento/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await event.pesquisarEventoId(id);
    resp.send(novo);
})

endpoints.put('/evento/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarClientes(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/evento/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/evento/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarClientesId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/evento/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeC(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})


export default endpoints;
