import * as jogo from "../repository/jogosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/jogos', async (req, resp) => {
    let registros = await jogo.pesquisarJogos();
    resp.send(registros);
})

endpoints.post('/jogos/enviar', async (req, resp) => {
    let novo = req.body; // {titulo, genero, plataforma, ano}
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

export default endpoints;
