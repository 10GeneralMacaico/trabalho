import eventos from './controller/eventosController.js';
import hoteis from './controller/hoteisController.js';
import jogos from './controller/jogosController.js';
import usuarios from './controller/usuariosController.js';
import pedidos from './controller/pedidosController.js';
import clientes from './controller/clientesController.js';
import filmes from './controller/filmesController.js';
import series from './controller/seriesController.js';
import produtos from './controller/produtosController.js';
import musicas from './controller/musicasController.js';


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



