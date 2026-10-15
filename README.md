# 🚀 Landing Page Institucional e Comercial: Motoboy Florianópolis ®

> **Documento de Referência Acadêmica**  
> **Disciplina:** Programação Estruturada / Desenvolvimento Web Front-End  
> **Tecnologias:** HTML5 Semântico, CSS3 Moderno, JavaScript Vanilla e Bootstrap 5  
> **Autor da Refatoração:** Jean Douglas

---

## 📌 Sumário
1. [Visão Geral do Projeto](#-visão-geral-do-projeto)
2. [O que é uma Landing Page? (Fundamentação Teórica)](#-o-que-é-uma-landing-page-fundamentação-teórica)
3. [Objetivo Comercial & Estratégias de Conversão](#-objetivo-comercial--estratégias-de-conversão)
4. [Estrutura Anatômica da Página (Arquitetura de Informação)](#-estrutura-anatômica-da-página-arquitetura-de-informação)
5. [Canais de Ação e Conversão Imediata](#-canais-de-ação-e-conversão-imediata)
   - [Botão Flutuante do WhatsApp](#1-botão-flutuante-do-whatsapp)
   - [Link Direto para Chamada Telefônica (Click-to-Call)](#2-link-direto-para-chamada-telefônica-click-to-call)
   - [Link para Plataforma de Pedido de Serviço Online](#3-link-para-plataforma-de-pedido-de-serviço-online)
6. [Design System: Paleta de Cores & Psicologia Visual](#-design-system-paleta-de-cores--psicologia-visual)
7. [Tipografia e Hierarquia Visual](#-tipografia-e-hierarquia-visual)
8. [Funcionalidades Técnicas & JavaScript](#-funcionalidades-técnicas--javascript)
   - [Navegação Interna Suave com Compensação de Altura (Offset)](#1-navegação-interna-suave-com-compensação-de-altura-offset)
   - [ScrollSpy Automático (Item Ativo no Menu)](#2-scrollspy-automático-item-ativo-no-menu)
   - [Carrossel Interativo com Suporte a Swipe/Touch](#3-carrossel-interativo-com-suporte-a-swipetouch)
   - [Preloader e Animações WOW.js](#4-preloader-e-animações-wowjs)
9. [Responsividade e Mobile-First](#-responsividade-e-mobile-first)
10. [Boas Práticas de HTML5 Semântico, Acessibilidade e Segurança](#-boas-práticas-de-html5-semântico-acessibilidade-e-segurança)
11. [Como Executar o Projeto Localmente](#-como-executar-o-projeto-localmente)

---

## 📖 Visão Geral do Projeto

Este projeto consiste na refatoração completa de um portal legado, transformando-o em uma **Landing Page pura de alta performance**, convertida para os padrões internacionais de **HTML5 Semântico**, **CSS3 Moderno** e **JavaScript Vanilla**, preservando a total responsividade para dispositivos móveis, tablets e desktops.

Todo o fluxo que anteriormente direcionava para painéis administrativos ou sistemas restritos de agenda foi desacoplado da navegação pública, mantendo o foco exclusivo na **apresentação da empresa, atração de clientes, recrutamento de entregadores parceiros e conversão comercial imediata**.

---

## 🎯 O que é uma Landing Page? (Fundamentação Teórica)

No Marketing Digital e na Engenharia de Software voltada para a Web, uma **Landing Page** (ou *página de aterrissagem / página de destino*) é uma página web concebida com um **propósito único e específico de conversão**.

### Diferença Fundamental: Site Tradicional vs. Landing Page

| Característica | Site Institucional Tradicional | Landing Page de Alta Conversão |
| :--- | :--- | :--- |
| **Objetivo** | Informar de forma ampla sobre a organização. | Conduzir o usuário a **uma ação clara e imediata** (Lead / Chamada / Pedido). |
| **Navegação** | Menus com dezenas de páginas externas e links dispersos. | Navegação em **página única (One-Page)** via âncoras internas suaves (`#secao`). |
| **Taxa de Fuga** | Alta dispersão de cliques. | **Foco direcionado**, eliminando distrações e caminhos sem saída. |
| **Chamada para Ação (CTA)** | Várias e despadronizadas. | **CTAs estratégicos e repetidos** ao longo da jornada de rolagem. |
| **Prova Social** | Geralmente ausente ou escondida. | **Destaque central** com notas reais, depoimentos e selos de reputação. |

---

## 💼 Objetivo Comercial & Estratégias de Conversão

O principal objetivo de negócio desta landing page é **captar clientes com urgência de transporte de mercadorias e documentos na Grande Florianópolis** e **recrutar motociclistas parceiros autônomos**.

Para maximizar a taxa de conversão (CRO - *Conversion Rate Optimization*), foram implementados os seguintes gatilhos mentais:
1. **Gatilho da Urgência & Prontidão:** Resposta imediata por meio de botões com ligação telefônica direta e WhatsApp.
2. **Gatilho da Prova Social:** Exibição destacada de nota máxima **5.0** no Google (com mais de 519 avaliações) e Facebook (51 avaliações), acompanhadas de depoimentos reais de clientes satisfeitos.
3. **Gatilho da Autoridade:** Menção explícita de ampla experiência no atendimento a **licitações públicas, transporte de materiais biológicos e medicamentos** para órgãos governamentais e instituições privadas.
4. **Gatilho da Simplicidade:** Eliminação de formulários burocráticos longos; o cliente pode pedir com apenas um clique.

---

## 🏗 Estrutura Anatômica da Página (Arquitetura de Informação)

A página foi construída seguindo a estrutura psicológica ideal de leitura em **"Z"** e **"F"**:

```
[ HEADER / NAVBAR FIXA ]
       │
       ▼
[ 1. HERO SECTION (Dobra 1) ] ────────► Proposta de Valor + CTAs Imediatos
       │
       ▼
[ 2. SOBRE & PROVA SOCIAL ] ──────────► Carrossel Touch + Avaliações 5.0 (Google/FB)
       │
       ▼
[ 3. SERVIÇOS DE ENTREGA ] ───────────► 6 Cards Semânticos de Especialidades
       │
       ▼
[ 4. SEJA MOTOBOY (Recrutamento) ] ───► Convite para Novos Parceiros
       │
       ▼
[ 5. ÁREA DO MOTOBOY ] ───────────────► App Oficial + Regras + Cupons de Parcerias
       │
       ▼
[ RODAPÉ / FOOTER ] ──────────────────► Links Rápidos, Suporte, Endereço e Créditos
```

---

## ⚡ Canais de Ação e Conversão Imediata

### 1. Botão Flutuante do WhatsApp
- **Posicionamento:** Fixo no canto inferior esquerdo (`position: fixed; bottom: 30px; left: 30px; z-index: 9999;`).
- **Animação de Pulso:** Possui anéis concêntricos animados via `@keyframes waPulse` em CSS3 que atraem a visão do usuário sem obstruir a leitura do conteúdo.
- **Link Inteligente (`wa.me`):**
  ```html
  <a href="https://wa.me/5548996462777?text=Olá%2C+tudo+bem%3F+Estou+precisando+de+um+motoboy..." 
     class="whatsapp-float" 
     target="_blank" 
     rel="noopener noreferrer" 
     aria-label="Fale conosco pelo WhatsApp">
  ```
- **Parâmetro de Mensagem Pré-Preenchida:** O parâmetro `?text=` já inicia o diálogo com uma saudação formal e contextualizada, diminuindo a fricção do cliente na hora de digitar a primeira mensagem.

### 2. Link Direto para Chamada Telefônica (Click-to-Call)
- **Protocolo Utilizado:** `tel:048996462777`
- **Comportamento Acadêmico:**
  - Em smartphones (Android/iOS), dispara nativamente o discador do aparelho com o número preenchido pronto para chamar.
  - Em desktops com Windows/macOS, pode disparar aplicativos de telefonia integrada (FaceTime, Skype, WhatsApp Desktop, Teams).
- **Atributos:** Abre com `target="_blank" rel="noopener noreferrer"`.

### 3. Link para Plataforma de Pedido de Serviço Online
- **Destino:** `https://motoboyflorianopolis.com.br/cliente`
- **Aplicação:** Permite que empresas corporativas e clientes cadastrados façam login ou abram ordens de serviço diretamente na plataforma web dedicada, com cálculo automatizado de rotas e faturamento.
- **Destaque Visual:** Estilizado como um botão em formato de pílula (`.nav-btn-order`) na cor primária com sombra dinâmica, garantindo visibilidade na primeira dobra da página.

---

## 🎨 Design System: Paleta de Cores & Psicologia Visual

As cores foram estruturadas através de variáveis globais de CSS3 (`:root`), permitindo fácil manutenção e estudo acadêmico:

```css
:root {
  --primary-color: #E8505B;   /* Coral Avermelhado */
  --primary-hover: #d03d48;   /* Variação mais escura para estados interativos */
  --whatsapp-color: #25d366;  /* Verde Oficial do WhatsApp */
  --star-color: #FFB800;      /* Dourado para Estrelas de Avaliação */
  --dark-color: #263238;      /* Grafite Escuro para Títulos e Rodapé */
  --text-color: #676F73;      /* Cinza Neutro para Texto Corrido */
  --light-bg: #F9FAFB;        /* Fundo Alternado Suave */
  --border-color: #E5E9F0;    /* Linhas Divisórias Suaves */
}
```

### Análise da Psicologia das Cores Aplicada
- **`#E8505B` (Coral / Vermelho de Ação):** Representa dinamismo, energia, agilidade e urgência. Essencial para serviços de socorro e despacho expresso.
- **`#25d366` (Verde WhatsApp):** Estimula a sensação imediata de proximidade, atendimento humano, autorização e facilidade de contato.
- **`#FFB800` (Amarelo Ouro):** Usado nas 5 estrelas de avaliação, transmitindo sensação de prestígio, confiança consolidada e excelência técnica.
- **`#263238` (Grafite Profundo):** Substituto moderno do preto puro (`#000`), oferecendo alto contraste sem gerar fadiga ocular excessiva.

---

## ✍ Tipografia e Hierarquia Visual

O projeto utiliza duas famílias tipográficas importadas via Google Fonts:

1. **`Fira Sans` (Títulos e Subtítulos - `h1` a `h6`):**
   - Possui desenho geométrico e moderno, conferindo peso, legibilidade e autoridade visual aos títulos.
2. **`Heebo` (Corpo de Texto e Menus):**
   - Fonte sem serifa com proporções amplas, garantindo excelente leiturabilidade tanto em telas de alta densidade (Retina) quanto em telas pequenas de smartphones.

---

## ⚙ Funcionalidades Técnicas & JavaScript

O código JavaScript (`assets/js/main.js`) foi completamente reestruturado em **JavaScript Moderno (ES6+)**, modularizado, auto-executável via IIFE `(function() { "use strict"; ... })()`, sem poluir o escopo global do navegador.

### 1. Navegação Interna Suave com Compensação de Altura (Offset)
Para evitar que o cabeçalho fixo (`sticky header`) sobreponha o início do título ao clicar em uma âncora do menu, foi aplicada uma solução dupla:
- **No CSS:** Declaração de `scroll-margin-top: 85px;` para todas as seções com identificador `id`.
- **No JavaScript:** Cálculo dinâmico do deslocamento:
  ```javascript
  const navbarHeight = headerNavbar ? headerNavbar.offsetHeight : 70;
  const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - (navbarHeight - 10);
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
  ```

### 2. ScrollSpy Automático (Item Ativo no Menu)
Monitora a posição de rolagem em tempo real e aplica a classe `.active` ao item do menu correspondente à seção atualmente visível na tela do usuário.

### 3. Carrossel Interativo com Suporte a Swipe/Touch
Anteriormente incorporado em linha no PHP, o carrossel foi unificado no script principal:
- **Giro Automático:** Troca de slides a cada 7 segundos.
- **Pausa Inteligente no Hover:** O temporizador pausa quando o cursor está sobre o carrossel, permitindo a leitura tranquila dos depoimentos.
- **Suporte a Gestos de Arraste (Touch & Mouse Drag):** Implementação nativa dos eventos `touchstart`/`touchmove`/`touchend` e `mousedown`/`mousemove`/`mouseup`, permitindo arrastar os slides lateralmente com o dedo no celular ou com o mouse no computador.
- **Navegação por Pontos (Dots):** Atualização automática e navegação direta ao clicar no indicador.

### 4. Preloader e Animações WOW.js
- **Preloader:** Transição suave com fade-out após o evento `window.load`.
- **WOW.js:** Efeito de revelação gradual (*fade-in-up*) dos componentes conforme o usuário faz a rolagem da página.

---

## 📱 Responsividade e Mobile-First

A landing page foi desenvolvida com base no sistema de grid de 12 colunas do **Bootstrap 5**, complementado por regras customizadas em `landing.css`:

| Resolução | Comportamento dos Elementos |
| :--- | :--- |
| **Mobile (< 576px)** | Títulos redimensionados para caber em telas compactas; botões de CTA expandem para 100% da largura facilitando o toque do polegar; carrossel adapta altura para proporção áurea; tooltip do WhatsApp é ocultado para não cobrir a tela. |
| **Tablet (576px a 991px)** | Menu recolhido em botão hambúrguer expansível com auto-fechamento ao clique; grid de serviços em 2 colunas; carrossel e informações de apresentação distribuídos verticalmente de forma harmoniosa. |
| **Desktop (>= 992px)** | Menu horizontal aberto com botões de chamada e redes sociais; grid de serviços em 3 colunas perfeitamente alinhadas; carrossel e texto em layout lado a lado (6x6). |

---

## 🛡 Boas Práticas de HTML5 Semântico, Acessibilidade e Segurança

1. **Tags Semânticas Rigorosas:**
   - `<header>` para a barra de topo;
   - `<nav>` para os links de navegação;
   - `<main>` para o conteúdo principal;
   - `<section>` para cada agrupamento temático;
   - `<article>` para cada cartão independente de serviço;
   - `<footer>` para o rodapé corporativo.
2. **Segurança em Links Externos:**
   - Todos os links com `target="_blank"` contam obrigatoriamente com o atributo `rel="noopener noreferrer"`, prevenindo vulnerabilidades do tipo *Tabnabbing* e bloqueando vazamento do cabeçalho `Referer`.
3. **Acessibilidade (a11y):**
   - Ícones decorativos acompanhados de `aria-hidden="true"`;
   - Botões de alternância e links sem texto explícito identificados com `aria-label`;
   - Contraste de cores testado e aprovado conforme as diretrizes **WCAG 2.1 nível AA**.

---

## 🚀 Como Executar o Projeto Localmente

Por ter sido completamente refatorada para **HTML5 puro, CSS3 e JavaScript**, a landing page não possui mais dependência obrigatória de interpretador PHP ou servidor MySQL para ser visualizada em aula ou apresentada como trabalho.

### Opção 1: Abertura Direta no Navegador
1. Navegue até a pasta do projeto.
2. Dê um duplo clique no arquivo `index.html`.
3. A página abrirá instantaneamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Extensão Live Server (VS Code)
1. Abra a pasta do projeto no **Visual Studio Code**.
2. Clique com o botão direito no arquivo `index.html`.
3. Selecione **"Open with Live Server"**.

### Opção 3: Servidor Local via Terminal (PowerShell / Prompt)
Se preferir rodar através de um servidor HTTP local:
```powershell
# Com Python 3 instalado:
python -m http.server 8000

# Ou com Node.js (npx):
npx serve .

# Ou com PHP embutido (caso deseje testar a compatibilidade do index.php):
php -S localhost:8000
```
Depois acesse `http://localhost:8000` no seu navegador.
