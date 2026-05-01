// Importa o Router do Express para criar um módulo de rotas separado do arquivo principal do servidor [1]
import { Router } from "express";
// Importa constantes de códigos HTTP para usar nomes semânticos (ex: OK em vez de 200) [3, 4]
// eslint-disable-next-line quotes
import { StatusCodes } from 'http-status-codes';
// Inicializa as variáveis de ambiente do arquivo .env para que fiquem disponíveis no processo [5]
// eslint-disable-next-line quotes
import 'dotenv/config';

// Importa o objeto centralizador de controllers, facilitando o acesso a diferentes entidades [6, 7]
import { CidadesController } from "../controllers";

// Instancia o roteador que será utilizado para definir os endpoints da API [1]
const router = Router();

/**
 * Rota pública simples de teste (GET /).
 * Serve para garantir que a API está rodando e respondendo corretamente [8].
 */
// eslint-disable-next-line quotes
router.get('/', (req, res) => {
    // Retorna o status 200 (OK) e uma mensagem de boas-vindas [9, 10]
    // eslint-disable-next-line quotes
    return res.status(StatusCodes.OK).send('Hello, World!');
});

/**
 * Rota para criação de cidades (POST /cidades).
 * Delega a lógica de processamento para o método 'create' do CidadesController [8, 11].
 */
// eslint-disable-next-line quotes
router.post('/cidades', CidadesController.create);

// Exporta o roteador configurado para ser consumido no arquivo server.ts via server.use(router) [2]
export { router };