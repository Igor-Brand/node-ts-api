// Importa o framework Express para construir a base da API REST [1, 3]
// eslint-disable-next-line quotes
import express from 'express';
// Importa o arquivo central de rotas onde todos os endpoints (cidades, pessoas, etc.) estão definidos [2]
// eslint-disable-next-line quotes
import { router } from './routes';

/**
 * Cria a instância principal da aplicação Express.
 * Nas fontes, essa variável é frequentemente chamada de 'server', mas 'app' é um padrão comum de mercado [4].
 */
const app = express();

/**
 * Middleware necessário para que o servidor consiga interpretar corpos de requisição no formato JSON.
 * Sem esta linha, o 'req.body' retornaria 'undefined' ao receber dados de ferramentas como o Insomnia [5, 6].
 */
app.use(express.json());

/**
 * Indica que a aplicação deve utilizar as rotas definidas no arquivo importado anteriormente.
 * Isso permite que o código do servidor fique limpo, delegando a gestão de caminhos para o Router [2, 7].
 */
app.use(router);

/**
 * Exporta a instância configurada da aplicação.
 * Isso é feito para que o servidor possa ser iniciado em outro arquivo (como o index.ts),
 * onde o método '.listen()' será chamado para definir a porta de execução [8, 9].
 */
export { app };