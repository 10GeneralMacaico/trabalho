import conection from "./connection.js";

export async function pesquisarSeries() {
  const Or =`
  select *from series
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function inserirSeries(novo) {
  const ordem = `
    insert into series (titulo, genero, temporadas, episodios, ano_inicio, ano_fim, classificacao, descricao, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarSeries(id) {
  const Or =`
  delete from series
   where id = ?
  `
  await conection.query(Or, [id]);
}

export async function alterarSeries(id, novo) {
  const ordem = `
    update series 
      set titulo=?, 
          genero=?, 
          temporadas=?, 
          episodios=?, 
          ano_inicio=?, 
          ano_fim=?, 
          classificacao=?, 
          descricao=?, 
          criado_em=?, 
          atualizado_em=?
    WHERE id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarSeriesId(id) {
  const Or =`
  select *from series
   where id =?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}
