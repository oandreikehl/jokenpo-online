# ✊ JokenPô

O **JokenPô** é uma aplicação web baseada no clássico jogo de **Pedra, Papel e Tesoura**, permitindo que o usuário jogue contra o computador diretamente pelo navegador.

O jogador escolhe uma das três opções disponíveis e a aplicação realiza a escolha da máquina, compara as jogadas e determina automaticamente o resultado da rodada.

Além do resultado de cada partida, o jogo mantém o **placar do usuário e do computador**, tornando possível acompanhar a disputa ao longo das rodadas.

---

## 🚀 Tecnologias e recursos utilizados

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="45px" alt="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="45px" alt="CSS3"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45px" alt="JavaScript"/>
</div>

<img src="https://github.com/oandreikehl/jokenpo-online/blob/master/assets/jokenpo-online.jpg?raw=true">

### HTML5

Utilizado para estruturar a interface do jogo, incluindo as opções de jogada, placar e áreas de apresentação dos resultados.

### CSS3

Responsável pela identidade visual, organização dos elementos, estilização das opções e adaptação da interface para diferentes tamanhos de tela.

### JavaScript

Responsável por toda a lógica do jogo, incluindo a escolha do usuário, geração da jogada do computador, comparação das opções, definição do vencedor e atualização do placar.

### 🎲 Geração aleatória

A escolha do computador é realizada de forma aleatória entre as três opções disponíveis, tornando cada rodada independente.

### ⚙️ Estruturas condicionais

A lógica do jogo utiliza condições para comparar a escolha do usuário com a escolha do computador e determinar se a rodada resulta em **vitória, derrota ou empate**.

---

## ✨ Funcionalidades

* ✊ Escolha entre Pedra, Papel e Tesoura
* 🤖 Jogada automática do computador
* 🎲 Escolha aleatória da máquina
* 🏆 Identificação do vencedor da rodada
* 🤝 Identificação de empate
* 📊 Placar do usuário
* 🤖 Placar do computador
* 🔄 Possibilidade de jogar várias rodadas
* 📱 Interface responsiva
* ⚡ Atualização dinâmica através de JavaScript

---

## 🎮 Como funciona

```text
        👤 JOGADOR
            ↓
   ✊ Pedra | 📄 Papel | ✂️ Tesoura
            ↓
       ⚙️ JavaScript
            ↓
     🤖 Escolha da máquina
            ↓
       🎲 Aleatoriedade
            ↓
    ⚔️ Comparação das jogadas
            ↓
     ┌──────┼──────┐
     ↓      ↓      ↓
   🏆      🤝      ❌
 Vitória   Empate  Derrota
     ↓      ↓      ↓
       📊 Atualiza o
          placar
```

---

## 🧠 Lógica do jogo

A cada rodada, o JavaScript recebe a escolha do usuário e gera uma escolha aleatória para o computador.

Em seguida, as duas opções são comparadas para determinar o resultado:

```text
✊ Pedra
   ↓ vence
✂️ Tesoura

📄 Papel
   ↓ vence
✊ Pedra

✂️ Tesoura
   ↓ vence
📄 Papel
```

Quando as duas escolhas são iguais, a rodada termina em **empate**.

Após definir o resultado, o placar correspondente é atualizado na interface.

---

## 📊 Sistema de pontuação

O jogo mantém dois placares independentes:

```text
👤 Usuário: 0
🤖 Computador: 0
```

A cada vitória, o placar do respectivo jogador é incrementado, permitindo acompanhar o resultado de várias rodadas.

---

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, permitindo jogar em:

* 💻 Desktop
* 📱 Smartphones
* 📲 Tablets

---

## 🛠️ Estrutura do projeto

```text
JokenPo/
│
├── 📄 index.html
├── 🎨 style.css
├── ⚙️ scripts.js
└── 🖼️ assets/
```

---

## 🎯 Destaques

* Interação entre usuário e computador
* Lógica de jogo desenvolvida em JavaScript
* Geração de escolhas aleatórias
* Estruturas condicionais para definição dos resultados
* Sistema de pontuação
* Manipulação dinâmica dos elementos da interface
* Design responsivo

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Andrei Kehl**.
