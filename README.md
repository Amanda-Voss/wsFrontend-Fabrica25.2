# Pokédex Frontend

Frontend de uma Pokédex desenvolvido em *React + Vite + Tailwind, criado como desafio para a **Fábrica de Software 2025.2*.  

O projeto permite explorar, favoritar e visualizar informações detalhadas sobre Pokémons, e já está *deploy no Vercel*:  
[[[https://ws-frontend-fabrica25-2-amanda-voss-projects.vercel.app](https://ws-frontend-fabrica25-2-amanda-voss-projects.vercel.app)]]

## ✨ Funcionalidades  

- *Página Inicial*  
    - Lista de Pokémons paginada  
    - Barra de busca para filtrar pelo nome  
    - Favoritar/desfavoritar Pokémons  
    - Cada card é clicável e leva para a página de detalhes  

- *Página de Favoritos*  
    - Mostra apenas os Pokémons que foram favoritados  

- *Página de Informações*  
    - Exibe dados detalhados de um Pokémon selecionado, como:  
        - Nome e número na Pokédex  
        - Imagem oficial  
        - Altura e peso  
        - Experiência base  
        - Tipos (com destaque de cor para cada tipo)  
    - Botão para favoritar/desfavoritar diretamente na página de detalhes  

## 🛠 Tecnologias Utilizadas  

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [React Router](https://reactrouter.com/)  
- [Lucide Icons](https://lucide.dev/)  

## 📂 Estrutura de Páginas  

- / → Página inicial (lista de Pokémons + busca + favoritar)  
- /favourites → Lista de Pokémons favoritados  
- /pokemon/:id → Página de informações detalhadas do Pokémon selecionado  

## 🚀 Como Rodar o Projeto Localmente  

Pré-requisitos:
- Node.js 18+ e npm (ou yarn/pnpm) instalados

1. Clone o repositório:
     bash
     git clone https://github.com/Amanda-Voss/wsFrontend-Fabrica25.2.git
     cd pokedex-frontend
     
2. Instale as dependências:
     bash
     npm install
     
3. Inicie em modo desenvolvimento:
     bash
     npm run dev
     
     Acesse a aplicação em http://localhost:5173 (porta padrão do Vite).
