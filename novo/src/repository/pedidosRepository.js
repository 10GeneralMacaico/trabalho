import conection from "./conection.js";

export async function pesquisarClientes() {
  const Or =`
  select *from pedidos
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeC(nome) {
  const Or = `
    select *
      from pedidos
     where nome like ? 
  `

  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}

export async function inserirClientes(novo) {
  const Or = `
    insert into pedidos (nome, cpf, telefone)
    values (?, ?, ?, ?, ?,?)
  `;
  const [info] = await conection.query(Or, Object.values(novo));
  return info.insertId;
}

export async function deletarClientes(id) {
  const Or =`
  delete from pedidos
    where id=?
  `
  await conection.query(Or, [id]);
}

export async function alterarClientes(id, novo) {
  const Or = `
    update pedidos
    set nome =?, 
        cpf =?, 
        telefone=?,
    where id=?
  `;
  await conection.query(Or, [...Object.values(novo), id]);
}

export async function pesquisarClientesId(id) {
  const Or =`
  select *from pedidos
    where id=?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}
