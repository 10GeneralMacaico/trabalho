import * as pedido from "../repository/pedidosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/pedidos', async (req, resp) => {
    let registros = await pedido.pesquisarPedidos();
    resp.send(registros);
})

endpoints.get('/pedidos/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await pedido.filtrarPorNomePD(nome);
  resp.send(registros);
})

endpoints.post('/pedidos/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await pedido.inserirPedidos(novo);
    resp.send({ novoI: id });
})

endpoints.put('/pedidos/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await pedido.alterarPedidos(id, novo);
    resp.send();
})

endpoints.delete('/pedidos/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await pedido.deletarPedidos(id);
    resp.send();
})

endpoints.get('/pedidos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await pedido.pesquisarPedidosId(id);
    resp.send(novo);
})

endpoints.put('/pedidos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarPedidos(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/pedidos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarPedidos(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/pedidos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarPedidosId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/pedidos/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomePD(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})

export default endpoints;

