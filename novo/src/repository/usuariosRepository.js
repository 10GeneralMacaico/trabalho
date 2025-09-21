import conection from "./connection.js";

export async function pesquisarUsuarios() {
  const Or =`
  select *from usuarios
  `
  const [registro] = await conection.query(Or);
  return registro;
}

export async function filtrarPorNomeU(nome) {
  const Or = `
    select *
      from usuarios
     where nome like ? 
  `
  const [registros] = await conection.query(Or, ['%'+nome+'%'])
  return registros;
}


export async function inserirUsuarios(novo) {
  const ordem = `
    insert into usuarios (nome, email, senha, telefone, endereco, data_nascimento, criado_em, atualizado_em)
    values (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [info] = await conection.query(ordem, Object.values(novo));
  return info.insertId;
}

export async function deletarUsuarios(id) {
  const Or =`
  delete from usuarios
   where id =?
  `
  await conection.query(Or, [id]);
}

export async function alterarUsuarios(id, novo) {
  const ordem = `
    update usuarios
      set nome=?, 
          email=?, 
          senha=?, 
          telefone=?, 
          endereco=?, 
          data_nascimento=?, 
          criado_em=?, 
          atualizado_em=?
    WHERE id=?
  `;
  await conection.query(ordem, [...Object.values(novo), id]);
}

export async function pesquisarUsuariosId(id) {
  const Or =`
  select *from usuarios
   where id =?
  `
  const [registro] = await conection.query(Or, [id]);
  return registro;
}

