import conection from "./connection.js";

export async function pesquisarJogos() {
  const Or = `
  select *from jogos
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeJ(nome) {
  const Or = `
    select *
      from jogos
     where nome like ? 
  `

  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}

export async function inserirJogos(novo) {
  const ordem = `
    insert into jogos (titulo, genero, plataforma, desenvolvedora, ano_lancamento, classificacao, preco, descricao, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarJogos(id) {
  const Or = `
  delete from jogos
    where id = ?
  `
  await conection.query(Or, [id]);
}

export async function alterarJogos(id, novo) {
  const ordem = `
    update jogos 
      set titulo=?, 
          genero=?, 
          plataforma=?, 
          desenvolvedora=?, 
          ano_lancamento=?, 
          classificacao=?, 
          preco=?, 
          descricao=?, 
          criado_em=?, 
          atualizado_em=?
    where id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarJogosId(id) {
  const Or = `
  select *from jogos
    where id = ?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}


