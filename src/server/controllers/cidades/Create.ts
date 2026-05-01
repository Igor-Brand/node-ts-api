// Importação dos tipos Request e Response do Express para garantir o uso correto de autocomplete e segurança de tipos [1, 2]
import { Request, Response } from "express";

// Definição de uma interface para descrever a estrutura exata que esperamos receber no corpo (body) da requisição [3, 4]
interface ICidade {
    nome: string; // A cidade deve obrigatoriamente conter um campo 'nome' do tipo string [3, 5]
}

/**
 * Controller responsável pela lógica de criação de uma nova cidade.
 * O uso de generics em Request<{}, {}, ICidade> serve para tipar especificamente o corpo da requisição,
 * sendo que a interface ICidade ocupa a terceira posição dos parâmetros de tipo (Body) [4, 5].
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

    // Exibe no console os dados recebidos para validar se o Express está interpretando corretamente o JSON [3, 6, 7]
    console.log(req.body);

    // Retorna uma mensagem de sucesso para o cliente que realizou a chamada (como o Insomnia) [2, 8]
    return res.send("Cidade Criada com Sucesso!");
};