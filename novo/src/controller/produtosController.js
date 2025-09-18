import * as produto from "../repository/produtosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/produtos', async (req, resp) => {
    let registros = await produto.pesquisarProdutos();
    resp.send(registros);
})

endpoints.post('/produtos/enviar', async (req, resp) => {
    let novo = req.body; // {nome, preco}
    let id = await produto.inserirProdutos(novo);
    resp.send({ novoI: id });
})

endpoints.put('/produtos/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await produto.alterarProdutos(id, novo);
    resp.send();
})

endpoints.delete('/produtos/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await produto.deletarProdutos(id);
    resp.send();
})

endpoints.get('/produtos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await produto.pesquisarProdutosId(id);
    resp.send(novo);
})

export default endpoints;
