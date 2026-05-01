// Importa todas as funções exportadas do arquivo "Create.ts" e as agrupa em um objeto chamado 'create'.
// Isso é útil para capturar não apenas a função principal, mas qualquer outra exportação auxiliar daquele arquivo [3].
import * as create from "./Create";

// Cria e exporta um objeto centralizador chamado 'CidadesController'.
// O objetivo deste objeto é reunir todas as operações relacionadas à entidade "Cidades" [2, 4].
export const CidadesController = {
    // Utiliza o operador spread (...) para "espalhar" todas as funções importadas do objeto 'create' 
    // para dentro deste novo objeto. Se houver uma função 'create' lá, ela agora será acessível como 'CidadesController.create' [3].
    ...create,
};