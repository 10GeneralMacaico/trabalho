import * as usuario from "../repository/usuariosRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/usuarios', async (req, resp) => {
    let registros = await usuario.pesquisarUsuarios();
    resp.send(registros);
})

endpoints.post('/usuarios/enviar', async (req, resp) => {
    let novo = req.body; // {nome, senha, email}
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

export default endpoints;
