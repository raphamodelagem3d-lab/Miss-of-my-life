# Seu Site Moderno

Este é um template minimalista, responsivo e acessível feito com **HTML + CSS + JS**.  
Ideal para portfólios, landing pages e pequenas empresas.

## Como usar
1. Abra `index.html` e troque os textos e links.
2. Ajuste cores e espaçamentos em `styles.css` (variáveis em `:root`).
3. Coloque suas imagens na pasta `assets/` e atualize os `src` no HTML.
4. Publique:
   - **GitHub Pages**: crie um repositório, suba os arquivos, ative Pages em *Settings → Pages* (branch `main`, pasta `/root`).
   - **Netlify/Vercel**: arraste e solte a pasta no painel.
   - **Hospedagem tradicional**: envie via FTP para a pasta pública (ex.: `public_html`).

## Personalizações rápidas
- **Logo/Nome**: Edite o link `.brand` no topo do `index.html`.
- **Menu**: Ajuste os `<a href="#...">` dentro do `<nav>`.
- **Cores**: mude as variáveis em `:root` (ex.: `--primary`).
- **Dark/Light**: alterna pelo botão 🌓; preferência salva no `localStorage`.

## Formulário
O formulário é estático. Para receber mensagens no seu e-mail, conecte um serviço como:
- [Formspree](https://formspree.io) (gratuito para sites simples)
- Netlify Forms (ao hospedar no Netlify)
- Backend próprio (ex.: função serverless)

## Acessibilidade
- Link de pular conteúdo (`.skip-link`).
- Foco visível e contraste adequado.
- Navegação por teclado.
- `aria-*` em botões e navegação.

## Estrutura
```
modern-site/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── favicon.svg
    ├── placeholder1.webp
    ├── placeholder2.webp
    └── placeholder3.webp
```

## Licença
Faça o que quiser (MIT). Use como base para qualquer projeto.
