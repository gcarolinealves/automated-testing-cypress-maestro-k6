# Relatório de Testes Automatizados

1. **Testes de UI** para validação de login, utilizando o **Cypress**.
2. **Testes de API** para validação dos comportamentos esperados de uma API Mock, utlizando **Cypress**.
3. **Testes Mobile** para validação de login, logout e busca, utilizando **Maestro**.
4. **Testes de Performance** para simular múltiplos usuários acessando a API Mock simultaneamente, utilizando **k6**.

## **Testes de UI - Login de Usuário**

### Cenários de Testes

1. **Login bem-sucedido**: O usuário deve conseguir fazer login com o e-mail e senha corretos.  
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

## **Teste de Performance**

### Cenários de Testes

1. Configurar um teste de carga para 10 usuários acessando a API Mock simultaneamente.  

   - **Status**: Pass ✅

### Resultados

- **Usuários Virtuais (VUs) simultâneos**: 10.
- **Duração do teste**: 5 segundos.
- **Status da Resposta**: 100% das requisições retornaram status 200.
- **Total de Requisições**: 50 requisições executadas.
- **Throughput**: 9.35 requisições por segundo.
- **Dados Recebidos**: 33 KB.
- **Dados Enviados**: 4.4 KB.
- **Duração Média da Requisição**: 61.63ms.
- **Tempo de Espera (média)**: 60.16ms.
- **Tempo Mínimo**: 6.44ms.
- **Tempo Máximo**: 261.75ms.
- **Taxa de Falhas**: 0% (sem falhas registradas).
##
App Android Testado: Wikipedia<br>
Aplicação Web Testada: https://automationpratice.com.br/login<br>
API Mock Testada: https://restful-api.dev/<br>
API Mock do Teste de Performance: https://github.com/qazando/wiremock
