import * as filme from "../repository/filmesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/filmes', async (req, resp) => {
    let registros = await filme.pesquisarFilmes();
    resp.send(registros);
})

endpoints.get('/filmes/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filme.filtrarPorNomeF(nome);
  resp.send(registros);
})

endpoints.post('/filmes/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await filme.inserirFilmes(novo);
    resp.send({ novoI: id });
})

endpoints.put('/filmes/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await filme.alterarFilmes(id, novo);
    resp.send();
})

endpoints.delete('/filmes/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await filme.deletarFilmes(id);
    resp.send();
})

endpoints.get('/filmes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await filme.pesquisarFilmesId(id);
    resp.send(novo);
})

endpoints.put('/filmes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarFilmes(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/filmes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarFilmes(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/filmes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarFilmesId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/filmes/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeF(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})


export default endpoints;
