import conection from "./connection.js";

export async function pesquisarProdutos() {
  const Or = `
  select *from produtos
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function inserirProdutos(novo) {
  const ordem = `
    insert into produtos (nome, categoria, marca, preco, estoque, descricao, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarProdutos(id) {
  const Or = `
  delete from produtos
   where id =?
  `
  await conection.query(Or, [id]);
}

export async function alterarProdutos(id, novo) {
  const ordem = `
    update produtos
      set nome=?, 
          categoria=?, 
          marca=?, 
          preco=?, 
          estoque=?, 
          descricao=?, 
          criado_em=?, 
          atualizado_em=?
    where id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarProdutosId(id) {
  const Or = `
  select *from produtos
   where id =?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}
