# Relatório de Testes Automatizados

Este repositório contém três conjuntos de testes automatizados.

1. **Testes de UI** para validação de login, utilizando o **Cypress**.
2. **Testes de API** para validação dos comportamentos esperados de uma API Mock, utlizando **Cypress**.
3. **Testes Mobile** para validação de login, logout e busca, utilizando **Maestro**.
4. **Testes de Carga** para simular múltiplos usuários acessando a API Mock simultaneamente, utilizando **k6**.

## **Testes de UI - Login de Usuário**

### Cenários de Testes

1. **Login bem-sucedido:**: O usuário deve conseguir fazer login com o e-mail e senha corretos.  
   - **Status**: Pass ✅

2. **E-mail inválido**: O sistema deve exibir um erro "E-mail inválido" quando o e-mail fornecido for inválido.  
   - **Status**: Pass ✅

3. **Senha inválida**: O sistema deve exibir um erro "Senha inválida" quando a senha fornecida for incorreta.
   - **Status**: Pass ✅

## **Testes de API**

### Cenários de Testes

1. **Método**: GET
   - **Objetivo**: Validar se a resposta contém os dados corretos de um dispositivo, como id e name.
   - **Status**: Pass ✅

2. **Método**: GET
   - **Objetivo**: Validar se a resposta retorna o erro 404 quando um dispositivo não é encontrado.
   - **Status**: Pass ✅
    
3. **Método**: POST
   - **Objetivo**: Validar se o dispositivo é criado corretamente e o id gerado.
   - **Status**: Pass ✅

4. **Método**: PUT
   - **Objetivo**: Validar se a atualização de um campo foi bem sucedida.
   - **Status**: Pass ✅
   - 
5. **Método**: DELETE
   - **Objetivo**: Validar se um dispositivo foi excluído corretamente.
   - **Status**: Pass ✅

## **Teste Mobile**

### Cenários de Testes

1. **Login no app**: O login é realizado com sucesso utilizando as credenciais fornecidas.
    - **Status**: Pass ✅

2. **Busca por "Java" no app**: O sistema retorna a página do "Java (programming language)" após a pesquisa.
    - **Status:** Pass ✅

3. **Logout do app**: O logout é realizado corretamente ao clicar no botão de logout.
    - **Status**: Pass ✅

**Teste de Performance (Teste de Carga)**

### Cenários de Testes

1. Configurar um teste de carga para 10 usuários acessando a API Mock simultaneamente.  

   - **Status**: Pass ✅

### Resultados

- **Número de amostras**: 50
- **Tempo médio de resposta**: 61.63 ms
- **Tempo mínimo**: 6.44 ms
- **Tempo máximo**: 261.75 ms
- **Desvio padrão**: 47.47 ms
- **Código de resposta**: 200 (OK)
- **Erros**: 0%
- **Throughput**: 9.35 requisições/seg
- **Dados recebidos**: 33 KB
- **Dados enviados**: 4.4 KB
- **Tamanho médio da resposta**: 6933.6 bytes
##
Aplicação Web Testada: https://automationpratice.com.br/login<br>
API Mock Testada: https://restful-api.dev/<br>
App Android Testado: Wikipedia<br>
API Mock do Teste de Performance: https://github.com/qazando/wiremock
