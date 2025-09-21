import conection from "./connection.js";

export async function pesquisarLivros() {
  const Or =`
  select *from hoteis
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function inserirLivros(novo) {
  const ordem = `
    insert into hoteis (numero, nome, diaria)
    values (?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarLivros(id) {
  const Or =`
  delete from hoteis
   where id =?
  `
  await conection.query(Or, [id]);
}

export async function alterarLivros(id, novo) {
  const ordem = `
    update hoteis
      set numero=?, 
          nome=?, 
          diaria=?
    where id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarLivrosId(id) {
  const Or =`
  select *from hoteis
   where id=?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}
