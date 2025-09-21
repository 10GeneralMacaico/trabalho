import * as cliente from "../repository/clientesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/clientes', async (req, resp) => {
    let registros = await cliente.pesquisarClientes();
    resp.send(registros);
})

endpoints.get('/clientes/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await cliente.filtrarPorNomeC(nome);
  resp.send(registros);
})

endpoints.post('/clientes/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await cliente.inserirClientes(novo);
    resp.send({ novoI: id });
})

endpoints.put('/clientes/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await cliente.alterarClientes(id, novo);
    resp.send();
})

endpoints.delete('/clientes/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.send();
})

endpoints.get('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await cliente.pesquisarClientesId(id);
    resp.send(novo);
})

endpoints.put('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarClientes(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarClientesId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/clientes/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeC(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})

export default endpoints;
