# Deduplicação - React Hooks

Este projeto foi desenvolvido com o objetivo de resolver o problema da duplicação de dados em aplicações React utilizando apenas os hooks nativos do React. A duplicação de dados pode ocorrer em diversas situações em aplicações web, afetando a performance e a experiência do usuário. Para lidar com esse desafio, foram explorados seis cenários distintos, aplicando diferentes técnicas com hooks do React.

# Porquê acontece?
Muitas vezes, duas requisições ao mesmo endpoint são feitas em uma aplicação React devido a várias razões, que podem estar relacionadas ao gerenciamento inadequado do estado e efeitos colaterais. Alguns motivos disso são:

1. **Componentes Montando e Desmontando**:
   - Quando um componente monta (carrega) e desmonta (é removido), ele pode disparar a mesma requisição novamente ao ser montado novamente, especialmente se não houver lógica para prevenir isso.

2. **Hooks de Efeito (useEffect) Mal Configurados**:
   - Se o hook `useEffect` não for configurado corretamente, ele pode disparar múltiplas vezes. Isso acontece se a lista de dependências do `useEffect` não for corretamente definida, fazendo com que o efeito rode mais vezes do que o necessário.

3. **Renderizações Redundantes**:
   - Atualizações frequentes do estado ou propriedades que causam re-renderizações desnecessárias também podem disparar requisições múltiplas.

## Cenários Abordados

1. **Cenário 1: Com useState**: para gerenciar o estado da lista de dados.
2. **Cenário 2: Com useEffect**
3. **Cenário 3: Com useMemo**: para memorizar a lista de dados, evitando cálculos desnecessários.

4. **Cenário 4: Com useCallback**
5. **Cenário 5: Deduplicação com useRef**
6. **Cenário 6: Deduplicação com Custom Hook**
   - Criação de um custom hook para encapsular a lógica de deduplicação, tornando a solução reutilizável e fácil de integrar em diferentes componentes.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Hooks nativos do React**: `useState`, `useEffect`, `useMemo`, `useCallback`, e `useRef`.

## Estrutura do Projeto

- `src/`: Contém todo o código fonte do projeto.
  - `scenarios/`: Cenários utilizados no projeto.
  - `hooks/`: Custom hooks desenvolvidos para o caso de estudo.
  - `App.js`: Componente principal da aplicação.
  - `index.js`: Ponto de entrada da aplicação.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/manuelbento19/deduplication_react.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu_projeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute a aplicação:
   ```bash
   npm start
   ```
5. Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver a aplicação em execução.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, correções ou novas abordagens para deduplicação de dados usando hooks do React.
