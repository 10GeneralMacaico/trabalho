9import conection from "./connection.js";

export async function pesquisarEventos() {
  const Or =`
  select *from eventos
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeE(nome) {
  const Or = `
    select *
      from eventos
     where nome like ? 
  `

  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}

export async function inserirEventos(novo) {
  const ordem = `
    insert into eventos (nome, local, data, horario, organizador, capacidade, preco, descricao, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarEventos(id) {
  const Or =`
  delete from eventos
   where id =?
  `
  await conection.query(Or, [id]);
}

export async function alterarEventos(id, novo) {
  const ordem = `
    update eventos
      set nome=?, 
          local=?, 
          data=?, 
          horario=?, 
          organizador=?, 
          capacidade=?, 
          preco=?, 
          descricao=?, 
          criado_em=?, 
          atualizado_em=?
    where id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarEventosId(id) {
  const Or =`
  select *from eventos
   where id =?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}

