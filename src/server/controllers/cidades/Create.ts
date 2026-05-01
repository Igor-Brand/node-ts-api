// Importação dos tipos Request e Response do Express para garantir o uso correto de autocomplete e segurança de tipos [1, 2]
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup"; // Importação do Yup para validação de dados, embora não esteja sendo utilizado neste código específico [3, 4]
// Definição de uma interface para descrever a estrutura exata que esperamos receber no corpo (body) da requisição [3, 4]
interface ICidade {
    nome: string; // A cidade deve obrigatoriamente conter um campo 'nome' do tipo string [3, 5]
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required("O campo 'nome' é obrigatório para criar uma cidade.").min(3), // Validação usando Yup para garantir que o campo 'nome' seja uma string e seja obrigatório [4, 5]
});

/**
 * Controller responsável pela lógica de criação de uma nova cidade.
 * O uso de generics em Request<{}, {}, ICidade> serve para tipar especificamente o corpo da requisição,
 * sendo que a interface ICidade ocupa a terceira posição dos parâmetros de tipo (Body) [4, 5].
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    let validateData: ICidade | undefined = undefined; // Variável para armazenar os dados validados, inicialmente indefinida [4, 5]

    try {
        validateData =await bodyValidation.validate(req.body); // Validação do corpo da requisição usando o esquema definido com Yup [4, 5]
    } catch (error) {

        const yupError = error as yup.ValidationError; // Cast do erro para o tipo específico de erro do Yup para acessar suas propriedades [4, 5]
        
        return res.json({
            error: {
                default: yupError.message, // Mensagem de erro padrão fornecida pelo Yup, que descreve o motivo da falha na validação [4, 5]
            }, // Retorna os erros de validação para o cliente, permitindo que ele saiba exatamente o que está errado com os dados enviados [4, 5]
        });
    }

    // Exibe no console os dados recebidos para validar se o Express está interpretando corretamente o JSON [3, 6, 7]
    console.log(validateData);

    // Retorna uma mensagem de sucesso para o cliente que realizou a chamada (como o Insomnia) [2, 8]
    return res.send("Cidade Criada com Sucesso!");
};