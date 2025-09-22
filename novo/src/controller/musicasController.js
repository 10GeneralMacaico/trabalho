import * as musica from "../repository/musicasRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/musicas', async (req, resp) => {
    let registros = await musica.pesquisarMusicas();
    resp.send(registros);
})

endpoints.get('/musicas/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await musica.filtrarPorNomeM(nome);
  resp.send(registros);
})

endpoints.post('/musicas/enviar', async (req, resp) => {
    let novo = req.body;
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

endpoints.put('/musicas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarClientes(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/musicas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/musicas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarClientesId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/musicas/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeC(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})

export default endpoints;
