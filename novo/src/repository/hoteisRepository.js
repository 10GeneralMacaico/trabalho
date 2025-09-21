import conection from "./connection.js";

export async function pesquisarHoteis() {
  const Or =`
  select *from hoteis
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeH(nome) {
  const Or = `
    select *
      from hoteis
     where nome like ? 
  `

  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}

export async function inserirHoteis(novo) {
  const ordem = `
    insert into hoteis (numero, nome, diaria)
    values (?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarHoteis(id) {
  const Or =`
  delete from hoteis
   where id =?
  `
  await conection.query(Or, [id]);
}

export async function alterarHoteis(id, novo) {
  const ordem = `
    update hoteis
      set numero=?, 
          nome=?, 
          diaria=?
    where id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarHoteisId(id) {
  const Or =`
  select *from hoteis
   where id=?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}

