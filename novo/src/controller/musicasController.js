import * as musica from "../repository/musicasRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/musicas', async (req, resp) => {
    let registros = await musica.pesquisarMusicas();
    resp.send(registros);
})

endpoints.post('/musicas/enviar', async (req, resp) => {
    let novo = req.body; // {titulo, artista, album, ano, genero}
    let id = await musica.inserirMusicas(novo);
    resp.send({ novoI: id });
})

endpoints.put('/musicas/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await musica.alterarMusicas(id, novo);
    resp.send();
})

endpoints.delete('/musicas/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await musica.deletarMusicas(id);
    resp.send();
})

endpoints.get('/musicas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await musica.pesquisarMusicasId(id);
    resp.send(novo);
})

export default endpoints;
