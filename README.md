# Moratta

Site institucional (front-end) da arquiteta Leticia Martins — Moratta Arquitetura e Interiores.

Página única (one-pager), sem backend nem cadastro. Os botões de contato ("FALE COMIGO" e
"ORÇAMENTO") redirecionam para o WhatsApp da arquiteta.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- CSS Modules (um `.module.css` por componente/seção)
- Fontes via Google Fonts (Cinzel, Cinzel Decorative, Baskervville, Baskervville SC, Poppins)

> v1: layout fixo para desktop (sem versão responsiva). Hospedagem na Hostinger fica para a v2.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos estáticos prontos para upload em qualquer hospedagem.

```bash
npm run preview
```

Serve a build de produção localmente para conferência antes do deploy.

## Estrutura

```
src/
├── constants.js          # número de WhatsApp, mensagem padrão, links de Instagram/e-mail
└── components/
    ├── Header/            # logo + navegação
    ├── Hero/               # seção "Home" (headline + imagem)
    ├── Prazer/             # bio da Leticia
    ├── Projetos/           # grid de projetos (conteúdo placeholder, a ser substituído)
    ├── Arquitetura/        # seção de consultoria
    └── Footer/             # contato + redes sociais
public/img/                 # imagens usadas no site
design-reference/           # referências de design (não fazem parte do site)
```
