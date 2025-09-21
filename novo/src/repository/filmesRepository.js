import conection from "./conection.js";

export async function pesquisarFilmes() {
  const Or = `
  select *from filmes
  `;
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeF(nome) {
  const Or = `
    select *
      from cliente
     where nome like ? 
  `

  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}

export async function inserirFilmes(novo) {
  const Or = `
    insert into filmes (titulo, diretor, genero, duracao, ano_lancamento, classificacao, bilheteria, descricao, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(Or, Object.values(novo));
  return info.insertId;
}

export async function deletarFilmes(id) {
  const Or = `
  delete from filmes 
    where id =?
  `;
const [info] = await conection.query, [id]);
}

export async function alterarFilmes(id, novo) {
  const ordem = `
    UPDATE filmes SET
      titulo=?, diretor=?, genero=?, duracao=?, ano_lancamento=?, classificacao=?, bilheteria=?, descricao=?, criado_em=?, atualizado_em=?
    WHERE id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarFilmesId(id) {
  const Or = `
  select *from filmes
    where id =?
  `
  const [registro] = await conection.query("SELECT * FROM filmes WHERE id=?", [id]);
  return registro;
}


