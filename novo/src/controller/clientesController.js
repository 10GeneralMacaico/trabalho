import * as cliente from "../repository/clientesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/clientes', async (req, resp) => {
    let registros = await cliente.pesquisarClientes();
    resp.send(registros);
})

endpoints.get('/clientes/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await cliente.filtrarPorNomeC(nome);
  resp.send(registros);
})

endpoints.post('/clientes/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await cliente.inserirClientes(novo);
    resp.send({ novoI: id });
})

endpoints.put('/clientes/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await cliente.alterarClientes(id, novo);
    resp.send();
})

endpoints.delete('/clientes/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.send();
})

endpoints.get('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await cliente.pesquisarClientesId(id);
    resp.send(novo);
})



ChatGPT
Você disse:
import * as cliente from "../repository/clientesRepository.js";
import { Router } from 'express';

const endpoints = Router();

endpoints.get('/clientes', async (req, resp) => {
    let registros = await cliente.pesquisarClientes();
    resp.send(registros);
})

endpoints.get('/clientes/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await cliente.filtrarPorNomeC(nome);
  resp.send(registros);
})

endpoints.post('/clientes/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await cliente.inserirClientes(novo);
    resp.send({ novoI: id });
})

endpoints.put('/clientes/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await cliente.alterarClientes(id, novo);
    resp.send();
})

endpoints.delete('/clientes/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.send();
})

endpoints.get('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await cliente.pesquisarClientesId(id);
    resp.send(novo);
})

export default endpoints;


Quero que acrescente 4 endpoints no código acima:

Use como base o texto abaixo:

OBJETIVO
A missão de vocês é acrescentar os endpoints:
PUT           /nome_da_tabela/:id
DELETE     /nome_da_tabela/:id
GET           /nome_da_tabela/:id
GET           /nome_da_tabela/filtros=??
O ChatGPT disse:
Beleza 👌
No seu código, você já tem esses endpoints implementados para clientes (PUT, DELETE, GET/:id e GET/filtro).
O que o enunciado pede é que eles existam de forma genérica, seguindo exatamente os caminhos:

PUT       /nome_da_tabela/:id
DELETE    /nome_da_tabela/:id
GET       /nome_da_tabela/:id
GET       /nome_da_tabela/filtros=??
Vou acrescentar esses 4 endpoints no seu arquivo, mantendo os que você já fez para clientes.

import * as cliente from "../repository/clientesRepository.js";
import { Router } from 'express';

const endpoints = Router();


// ---------- ENDPOINTS CLIENTES ----------
endpoints.get('/clientes', async (req, resp) => {
    let registros = await cliente.pesquisarClientes();
    resp.send(registros);
})

endpoints.get('/clientes/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await cliente.filtrarPorNomeC(nome);
  resp.send(registros);
})

endpoints.post('/clientes/enviar', async (req, resp) => {
    let novo = req.body;
    let id = await cliente.inserirClientes(novo);
    resp.send({ novoI: id });
})

endpoints.put('/clientes/alt/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = req.body;
    await cliente.alterarClientes(id, novo);
    resp.send();
})

endpoints.delete('/clientes/del/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await cliente.deletarClientes(id);
    resp.send();
})

endpoints.get('/clientes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novo = await cliente.pesquisarClientesId(id);
    resp.send(novo);
})


endpoints.put('/nome_da_tabela/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let dados = req.body;
    resp.send();
})

endpoints.delete('/nome_da_tabela/:id', async (req, resp) => {
    let id = Number(req.params.id);
    resp.send();
})

endpoints.get('/nome_da_tabela/:id', async (req, resp) => {
    let id = Number(req.params.id);
    resp.send();
})

endpoints.get('/nome_da_tabela/filtros', async (req, resp) => {
    let filtros = req.query;
    resp.send();
})


export default endpoints;


