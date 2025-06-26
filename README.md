# Landing Page - Advocacia Oliveira Rodrigues

Esta é a documentação para a landing page desenvolvida para o escritório de advocacia **Oliveira Rodrigues**, com especialização em **Direito Imobiliário**.  
O site foi criado para ser moderno, informativo e focado na conversão de visitantes em clientes através de um design claro e chamadas para ação diretas.

---

## 🚀 Visão Geral do Projeto

O projeto consiste numa landing page de página única (SPA - *Single Page Application*), onde o utilizador navega verticalmente pelas diferentes secções.  
O objetivo é apresentar os serviços, a especialista responsável e fornecer canais de contacto diretos e eficientes.

---

## ✨ Funcionalidades Principais

- **Design Moderno e Responsivo**  
  O site adapta-se a diferentes tamanhos de ecrã, desde telemóveis a computadores de secretária.

- **Cabeçalho Fixo com Contacto Direto**  
  Inclui a logo e um botão de "Fale no Whatsapp" que permanece visível.

- **Seção de Herói com Vídeo de Fundo**  
  Causa um forte impacto visual inicial com um vídeo em loop automático.

- **Apresentação de Serviços**  
  Lista clara e objetiva dos problemas comuns que o escritório resolve.

- **Seção "Conheça a Especialista"**  
  Apresenta a advogada com foto e biografia, criando uma ligação de confiança com o visitante.

- **Efeito Parallax**  
  Uma secção com imagem de fundo fixa que cria uma sensação de profundidade e dinamismo durante a rolagem.

- **FAQ Interativo**  
  Uma seção de Perguntas Frequentes com sistema de *acordeão*, onde as respostas são reveladas ao clicar na pergunta.

- **Rodapé Completo**  
  Contém todas as informações de contacto necessárias (Nome, OAB, email, telefone) e a declaração de conformidade com as normas da OAB.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura base do site  
- **Tailwind CSS** – Estilização rápida e responsiva (via CDN)  
- **JavaScript (Vanilla)** – Interatividade (menu mobile e FAQ)  
- **Lucide Icons** – Biblioteca de ícones open-source (via CDN)  
- **Google Fonts** – Tipografia com as famílias _Inter_ e _Playfair Display_

---

## 📂 Estrutura de Ficheiros

```plaintext
/projeto-advocacia
│
├── 📄 index.html            # Ficheiro principal da página
│
├── 📁 css/
│   └── 📄 custom.css        # CSS personalizado (fontes, parallax, etc.)
│
├── 📁 imagens/
│   ├── 📄 logo-oliveira-rodrigues.png
│   ├── 📄 Pagando de advogada simpática.jpg
│   └── 📄 Fundo_site.png
│
├── 📁 js/
│   └── 📄 logica.js
│
├── 📁 videos/
│   └── 📄 Vídeo sem título ‐ Feito com o Clipchamp.mp4
│
└── 📄 README.md             # Este ficheiro de documentação

```
---

## 🔧 Como Editar e Personalizar

### 📝 Textos e Títulos
- Todos os textos estão no arquivo `index.html`.
- Edite diretamente dentro das tags HTML como `<h1>`, `<p>`, `<h3>`, etc.
- Para facilitar, localize a `<section>` correspondente (ex: `#sobre`, `#faq`, etc).

### 🖼️ Imagens e Logo
- Substitua os arquivos na pasta `/imagens`.
- Mantenha os mesmos nomes utilizados no atributo `src` das tags `<img>` no HTML.

### 🎥 Vídeos
- Troque o vídeo de fundo substituindo o arquivo em `/videos`.
- Atualize o caminho no atributo `src` da tag `<video>` no `index.html`.

### 🎨 Cores, Fontes e Efeito Parallax
- As definições estão no arquivo `css/custom.css`.
- Também é possível alterar cores e estilos diretamente pelas classes do Tailwind no `index.html`, como por exemplo: `bg-black`, `text-amber-400`, etc.

### 📞 Informações de Contato
- As informações como telefone, email e número da OAB estão no rodapé, dentro da tag `<footer>` do `index.html`.
- Edite diretamente esses dados conforme necessário.

---

> Este documento serve como um guia para **futuras manutenções e atualizações** do site.


