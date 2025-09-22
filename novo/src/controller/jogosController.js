import * as jogo from "../repository/jogosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/jogos', async (req, resp) => {
    let registros = await jogo.pesquisarJogos();
    resp.send(registros);
})

endpoints.get('/jogos/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await jogo.filtrarPorNomeJ(nome);
  resp.send(registros);
})

endpoints.post('/jogos/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await jogo.inserirJogos(novo);
    resp.send({ novoI: id });
})

endpoints.put('/jogos/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await jogo.alterarJogos(id, novo);
    resp.send();
})

endpoints.delete('/jogos/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await jogo.deletarJogos(id);
    resp.send();
})

endpoints.get('/jogos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await jogo.pesquisarJogosId(id);
    resp.send(novo);
})

endpoints.put('/jogos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarJogos(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/jogos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarJogos(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/jogos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarJogosId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/jogos/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeJ(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})


export default endpoints;

