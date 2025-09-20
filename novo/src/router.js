import eventos from './Controller/eventosController.js';
import hoteis from '';
import jogos from '';
import usuarios from '';
import pedidos from '';
import clientes from '';
import filmes from '';
import series from '';
import produtos from '';
import musicas from '';


export function AddRotas(api){
  api.use(eventos);
  api.use(hoteis);
  api.use(jogos);
  api.use(usuarios);
  api.use(pedidos);
  api.use(clientes);
  api.use(filmes);
  api.use(series);
  api.use(produtos);
  api.use(musicas);
}


