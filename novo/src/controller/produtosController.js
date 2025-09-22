import * as produto from "../repository/produtosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/produtos', async (req, resp) => {
    let registros = await produto.pesquisarProdutos();
    resp.send(registros);
})

endpoints.get('/produtos/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await produto.filtrarPorNomeP(nome);
  resp.send(registros);
})

endpoints.post('/produtos/enviar', async (req, resp) => {
    let novo = req.body;
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

endpoints.put('/produtos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarProdutos(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/produtos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarProdutos(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/produtos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarProdutosId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/produtos/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeC(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})

export default endpoints;
