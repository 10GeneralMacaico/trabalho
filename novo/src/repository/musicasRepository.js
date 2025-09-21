import conection from "./connection.js";

export async function pesquisarMusicas() {
  const Or =`
  select *from musicas
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeM(nome) {
  const Or = `
    select *
      from musicas
     where nome like ? 
  `
  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}


export async function inserirMusicas(novo) {
  const ordem = `
    insert into musicas (titulo, artista, album, genero, duracao, ano_lancamento, gravadora, preco, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarMusicas(id) {
  const Or =`
  delete from musicas
    where id = ?
  `
  await conection.query(Or, [id]);
}

export async function alterarMusicas(id, novo) {
  const ordem = `
    update musicas
      set titulo=?, 
          artista=?, 
          album=?, 
          genero=?, 
          duracao=?, 
          ano_lancamento=?, 
          gravadora=?, 
          preco=?, 
          criado_em=?, 
          atualizado_em=?
    where id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarMusicasId(id) {
  const Or =`
  select *from musicas
    where id = ?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}

