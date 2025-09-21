import conection from "./conection.js";

export async function pesquisarClientes() {
  const Or =`
  select *from clientes
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeC(nome) {
  const Or = `
    SELECT *
      FROM cliente
     WHERE nome like ? 
  `

  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}

export async function inserirClientes(novo) {
  const Or = `
    INSERT INTO clientes (nome, cpf, telefone, trabalho, produto_comprado)
    VALUES (?, ?, ?, ?, ?,?)
  `;
  const [info] = await conection.query(Or, Object.values(novo));
  return info.insertId;
}

export async function deletarClientes(id) {
  const Or =`
  delete from clientes
    where id=?
  `
  await conection.query(Or, [id]);
}

export async function alterarClientes(id, novo) {
  const Or = `
    update clientes
    SET nome =?, 
        cpf =?, 
        telefone=?, 
        trabalho =?,
        produto_comprado =?
    WHERE id=?
  `;
  await conection.query(Or, [...Object.values(novo), id]);
}

export async function pesquisarClientesId(id) {
  const Or =`
  select *from clientes
    where id=?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}


