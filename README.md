# Forsaken Souls: ReMaster

Site de leitura da obra **Forsaken Souls: ReMaster**, construído em **Angular 22**
(standalone components, signals e rotas). O site possui uma página inicial e três
páginas de capítulo, cada uma exibindo o conteúdo completo de um dos PDFs originais.

## Estrutura

```
public/
  pdf/
    capitulo-1.pdf        ← PDF original do Capítulo 1
    capitulo-2.pdf        ← PDF original do Capítulo 2
    capitulo-3.pdf        ← PDF original do Capítulo 3
src/
  app/
    app.ts / app.html / app.css      ← layout raiz (cabeçalho + roteador + rodapé)
    app.routes.ts                    ← rotas: / , /capitulo-1 , /capitulo-2 , /capitulo-3
    app.config.ts                    ← configuração do roteador (scroll)
    components/site-header/          ← cabeçalho: marca à esquerda, 3 botões à direita
    pages/home/                      ← página inicial (hero + cards dos capítulos)
    pages/chapter/                   ← leitor de capítulo (texto + controles)
    content/chapters.ts              ← texto dos PDFs, extraído e estruturado
  styles.css                         ← tema global (cinza escuro + roxo)
```

## Como executar

```bash
npm install
npm start        # servidor de desenvolvimento em http://localhost:4200
npm run build    # build de produção em dist/remaster-app
```

## Recursos

- **Cabeçalho fixo** com a marca *Forsaken Souls: ReMaster* à esquerda e três botões
  à direita que levam aos capítulos (com estado ativo destacado em roxo).
- **Tema cinza escuro + roxo** com gradientes, brilhos suaves e tipografia
  display (Cinzel) para títulos e serifa (Lora) para a leitura do texto.
- **Layout dinâmico e responsivo**: hero animado, cards com hover, coluna de
  leitura com medida ideal (~68 caracteres), texto justificado e capitular.
- **Ferramentas de leitura**: tamanho de texto ajustável (A−/A+, salvo no
  navegador), barra de progresso da leitura, botão voltar ao topo e link para o
  PDF original de cada capítulo.
- **Navegação completa**: links anteriores/próximos entre capítulos, rolagem
  restaurada pelo roteador e títulos por página.

## Conteúdo dos PDFs

O texto exibido nas páginas foi extraído automaticamente dos PDFs originais
(com `pdf-parse`) e estruturado em parágrafos em
`src/app/content/chapters.ts`. Os PDFs originais continuam disponíveis em
`public/pdf/` e podem ser abertos pelo botão *PDF original*.
