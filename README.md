# Efeitos LP Clínica

22 efeitos de animação usados na landing page de uma clínica odontológica, isolados em demos que funcionam sozinhas e prontas para copiar. Feito para mostrar e compartilhar.

Cada efeito tem **uma página com demo ao vivo**, botão **↻ Repetir** (para gravar vídeo) e um painel **{ } Código** com o HTML, CSS e JS, com botão de copiar.

## Ver ao vivo

Como é tudo estático (sem build, sem instalar nada), basta servir a pasta:

```bash
python -m http.server 8000
```

e abrir `http://localhost:8000`. (Abrir o `index.html` direto no navegador também funciona, mas alguns navegadores bloqueiam fontes e scripts em `file://`.)

## Os efeitos

### Rolagem

| # | Efeito | Tecnologia |
|---|---|---|
| 01 | [Rolagem suave (Lenis)](efeitos/01-smooth-scroll/) — A página desliza em vez de pular, e os links do menu rolam até a seção com inércia. Sincronizado com o ScrollTrigger. | Lenis, GSAP, ScrollTrigger |
| 02 | [Seção que trava e acende as etapas](efeitos/02-etapas-pin/) — A seção fica fixa na tela enquanto uma linha avança e acende cada etapa, uma por vez (ScrollTrigger com pin + scrub). | GSAP, ScrollTrigger, pin |
| 03 | [Painel que expande ao rolar](efeitos/03-painel-expande/) — O bloco entra pequeno, com cantos bem arredondados, e vai abrindo até ocupar a tela enquanto a foto desce mais devagar. | GSAP, ScrollTrigger, clip-path |
| 04 | [Parallax em fotos](efeitos/04-parallax/) — A foto se move dentro da moldura mais devagar que a rolagem. Duas variações: deslizando e com zoom que assenta. | GSAP, ScrollTrigger, scrub |

### Texto

| # | Efeito | Tecnologia |
|---|---|---|
| 05 | [Palavras surgindo do desfoque](efeitos/05-palavras-blur/) — Cada palavra do título sobe saindo do blur, uma depois da outra. SplitText divide o texto e se refaz sozinho se a largura mudar. | GSAP, SplitText, ScrollTrigger |
| 06 | [Linhas subindo por trás de uma máscara](efeitos/06-linhas-mascara/) — O parágrafo é dividido em linhas e cada uma sobe de dentro de uma máscara, como se o texto fosse impresso na hora. | GSAP, SplitText, ScrollTrigger |
| 07 | [Título que acende palavra por palavra](efeitos/07-titulo-acende/) — As palavras começam apagadas e vão acendendo conforme você rola, no ritmo da rolagem (scrub). | GSAP, SplitText, ScrollTrigger, scrub |
| 08 | [Números que contam até o valor final](efeitos/08-contadores/) — Os números sobem de zero até o valor quando entram na tela. O texto final (como "2k+") aparece só no fim. | GSAP, ScrollTrigger |

### Entradas e imagens

| # | Efeito | Tecnologia |
|---|---|---|
| 09 | [Abertura do hero](efeitos/09-abertura-hero/) — A foto abre do centro da tela, o menu desce, o título sai do desfoque palavra por palavra e o texto sobe por máscara. Tudo numa timeline só. | GSAP, SplitText, timeline, clip-path |
| 10 | [Revelação de imagens com clip-path](efeitos/10-revelacao-clip/) — Três jeitos de abrir uma imagem: de baixo para cima, de cima para baixo e em círculo. A foto ainda assenta com um leve zoom. | GSAP, clip-path, timeline |
| 11 | [Cards em escada com profundidade](efeitos/11-cards-escada/) — Três cards em degraus: cada um entra subindo com uma leve rotação e depois anda num ritmo diferente na rolagem, criando profundidade. | GSAP, ScrollTrigger, scrub |
| 12 | [Entrada em cascata (ScrollTrigger.batch)](efeitos/12-cascata-batch/) — Vários itens aparecem em sequência, sobem e ganham opacidade. O batch agrupa os que entram na tela juntos e anima todos de uma vez. | GSAP, ScrollTrigger.batch, stagger |
| 13 | [Linhas que se desenham](efeitos/13-linhas-desenhando/) — Os separadores de uma lista se desenham da esquerda para a direita, em sequência, enquanto o texto sobe. Usa uma variável CSS animada pelo GSAP. | GSAP, CSS variable, timeline |
| 14 | [Rodapé com letras gigantes](efeitos/14-rodape-letras/) — A marca gigante no rodapé aparece letra por letra, subindo e girando de leve, enquanto um leque de cards se abre ao lado. | GSAP, SplitText, ScrollTrigger |

### Interação

| # | Efeito | Tecnologia |
|---|---|---|
| 15 | [Troca de foto e texto com blur e zoom](efeitos/15-troca-foto/) — Ao clicar numa especialidade, a foto atual se desfoca e dá zoom enquanto a nova entra nítida, e o texto troca com um leve desfoque. | GSAP, interação, filter |
| 16 | [Citações com linhas subindo](efeitos/16-citacoes/) — Ao trocar de depoimento, as linhas do novo texto sobem de dentro da máscara e o nome entra logo depois. | GSAP, SplitText, interação |
| 17 | [Perguntas frequentes (acordeão suave)](efeitos/17-faq-acordeao/) — O item abre e fecha animando a altura de verdade, sem JavaScript de animação: só CSS grid (0fr → 1fr). O ícone troca de + para −. | CSS, JS puro, acessível |
| 18 | [Botão com texto rolando e varredura](efeitos/18-botao-rolante/) — No hover o texto rola para cima trocando por uma cópia, a seta desliza para fora e uma faixa de cor varre o botão. Só CSS. | CSS |
| 19 | [Card com seta que troca e zoom na foto](efeitos/19-card-seta/) — No hover, a foto dá zoom, a seta do botão sai por um canto enquanto outra entra pelo canto oposto, e o "Saiba mais" ganha sublinhado. | CSS |
| 20 | [Botões magnéticos](efeitos/20-botoes-magneticos/) — Os botões "grudam" no ponteiro: quando o mouse chega perto, eles seguem o movimento e voltam suaves quando ele sai. Usa gsap.quickTo, a forma mais leve de animar a cada movimento. | GSAP, quickTo, interação |

### Carrosséis

| # | Efeito | Tecnologia |
|---|---|---|
| 21 | [Carrossel em elipse (giro contínuo)](efeitos/21-carrossel-elipse/) — Os cards giram sem parar numa elipse: o da frente é grande e os de trás ficam menores e mais apagados. Desacelera no hover, obedece ao arrastar e tem setas e teclado. JS puro, sem biblioteca. | JS puro, matemática, arrastar |
| 22 | [Carrossel automático infinito (faixa)](efeitos/22-carrossel-infinito/) — Uma faixa de cards desliza sozinha, para sempre e sem emenda: uma cópia dos cards vem logo atrás, e a posição "dá a volta" no momento certo. Dá para arrastar com o dedo ou o mouse. | JS puro, arrastar, loop |

## Como usar um efeito na sua página

Cada pasta em `efeitos/` é independente:

```
efeitos/05-palavras-blur/
├── index.html   # a demo (o markup do efeito está dentro de <main>)
├── style.css    # CSS do efeito
└── script.js    # JS do efeito
```

1. Copie o markup de `<main>`, o `style.css` e o `script.js` para o seu projeto.
2. Carregue as bibliotecas que a demo usa (os `<script>` no fim do `index.html`).
3. Troque os seletores (`.blur-title`, `.hero__panel`...) pelos da sua página.

`assets/base.css` e `assets/viewer.js` são só a moldura das demos (barra superior e painel de código): **não são necessários** no seu projeto. As fotos das demos são gradientes de exemplo.

## Bibliotecas

| Biblioteca | Versão | Para quê |
|---|---|---|
| [GSAP](https://gsap.com) | 3.13 | animações e timelines (gratuito, inclusive os plugins) |
| GSAP ScrollTrigger | 3.13 | animações ligadas à rolagem, pin, scrub, batch |
| GSAP SplitText | 3.13 | dividir texto em palavras, linhas e letras |
| [Lenis](https://lenis.darkroom.engineering) | 1.3 | rolagem suave |

Tudo vem de CDN (jsDelivr), então precisa de internet para as demos com GSAP.

## Boas práticas que os efeitos seguem

Baseado nas orientações do [greensock/gsap-skills](https://github.com/greensock/gsap-skills):

- Anima só **transform, opacity e filter** (não pesa o layout).
- **Timelines** para sequências em vez de `delay` encadeado.
- `ScrollTrigger` somente em animações de topo, nunca dentro de uma timeline filha.
- `SplitText` com `autoSplit` e `onSplit` para refazer a divisão se a fonte ou a largura mudar.
- `gsap.quickTo` para o que atualiza a cada movimento do mouse.
- Respeita `prefers-reduced-motion` nos efeitos com movimento contínuo.

## Créditos

- O carrossel em elipse é um porte em JavaScript puro do conceito do componente *Halo Reel* (React + framer-motion).
- Animações construídas com GSAP e Lenis.
