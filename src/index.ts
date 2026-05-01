// Importa a instância configurada do servidor Express de outro arquivo.
// Essa separação permite que as configurações de rotas e middlewares fiquem isoladas da execução [1, 2].
// eslint-disable-next-line quotes
import { app } from './server/Server';

/**
 * Inicia o servidor para "escutar" requisições em uma porta específica.
 * process.env.PORT: Tenta ler a porta das variáveis de ambiente (útil para produção/deploy) [3, 4].
 * || 3333: Caso a variável de ambiente não esteja definida, utiliza a porta 3333 como fallback (padrão para desenvolvimento) [4].
 */
app.listen(process.env.PORT || 3333, () => {
    
    // Callback executado assim que o servidor é iniciado com sucesso, 
    // fornecendo feedback visual no console do desenvolvedor [5, 6].
    // eslint-disable-next-line quotes
    console.log('Server is running on port ' + (process.env.PORT || 3333));
});