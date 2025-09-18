import * as pedido from "../repository/pedidosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/pedidos', async (req, resp) => {
    let registros = await pedido.pesquisarPedidos();
    resp.send(registros);
})

endpoints.post('/pedidos/enviar', async (req, resp) => {
    let novo = req.body; // {cliente_id, produto_id, quantidade, data}
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

export default endpoints;
