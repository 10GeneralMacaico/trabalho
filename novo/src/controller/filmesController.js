    import * as filme from "../repository/filmesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/filmes', async (req, resp) => {
    let registros = await filme.pesquisarFilmes();
    resp.send(registros);
})

endpoints.post('/filmes/enviar', async (req, resp) => {
    let novo = req.body; // {titulo, ano, genero, diretor, avaliacao}
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

export default endpoints;
