import * as usuario from "../repository/usuariosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/usuarios', async (req, resp) => {
    let registros = await usuario.pesquisarUsuarios();
    resp.send(registros);
})

endpoints.get('/usuarios/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await usuario.filtrarPorNomeU(nome);
  resp.send(registros);
})

endpoints.post('/usuarios/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await usuario.inserirUsuarios(novo);
    resp.send({ novoI: id });
})

endpoints.put('/usuarios/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await usuario.alterarUsuarios(id, novo);
    resp.send();
})

endpoints.delete('/usuarios/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await usuario.deletarUsuarios(id);
    resp.send();
})

endpoints.get('/usuarios/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await usuario.pesquisarUsuariosId(id);
    resp.send(novo);
})

endpoints.put('/usuarios/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    await cliente.alterarUsuarios(id, dados);
    resp.status(200).json({ mensagem: "Cliente atualizado com sucesso", id, dados });
})

endpoints.delete('/usuarios/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarUsuarios(id);
    resp.status(200).json({ mensagem: "Cliente removido", id });
})

endpoints.get('/usuarios/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let clienteId = await cliente.pesquisarUsuariosId(id);
    resp.status(200).json({ mensagem: "Busca concluída", resultado: clienteId });
})

endpoints.get('/usuarios/filtros', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await cliente.filtrarPorNomeU(nome);
    resp.status(200).json({ filtro: nome, total: registros.length, dados: registros });
})

export default endpoints;
