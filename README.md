# Empire Burger
![empireburger](https://user-images.githubusercontent.com/89430601/193375953-a1313dd5-1040-4f06-ae41-3124abe66bad.gif)

Este projeto é uma landing page desenvolvida para uma hamburgueria fictícia chamada [Empire Burger](https://empire-burger-harlon.netlify.app/)!

<br>

## Instalação e execução
```
# Clonando repositório e entrando na pasta
$ git clone https://github.com/HarlonGarcia/EmpireBurger.git && cd EmpireBurger

# Instalando dependências necessárias
$ npm install

# Rodando aplicação no seu computador
$ npm start
```

<br>

## Tech Stack
- [ReactJS](https://pt-br.reactjs.org/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Styled-components 💅](https://styled-components.com/)

<br>

## 📝 Critérios de aceite
Desafio proposto por [BRChallenges](https://www.brchallenges.com/), site de desafios criado por [Leonardo Vargas](https://github.com/leovargasdev) e [protótipo](https://www.figma.com/file/ag4Az50adOF53pBrwI0wFg/Empire-Burger?node-id=0%3A1) feito no Figma por [Tiago Alves](https://designerprodutivo.com.br/link-bio/).

Segue os critérios de avaliação por nível:

<br>

### Nível Fácil

- [x] Criar as seguintes seções: Menu, Banner, "Ofertas especiais", "Onde fica o nosso castelo", Footer.

- [x] Ao clicar em um item do menu, o usuário deverá ser levado para a seção correspondente.

- [x] Na seção "Ofertas especiais" os elementos devem ser organizados com o uso da propriedade ```display: grid``` do css.

- [x] As informações do card da oferta (nome do prato e gramagem) devem estar no HTML, a única imagem deve ser a foto do prato com o preço.

- [x] Na seção "Onde fica o nosso castelo" você deverá ser incorporada uma localização do Google Maps.

<br>

### Nível Médio

- [x] Todos os requisitos do nivel fácil.

- [ ] Criar as seguintes seções: Cardápio, Atendimento, "Nossas entregas".

- [ ] Na seção "Cardápio" os preços devem ser formatados com o método ```Intl.NumberFormat```.

- [x] O card "Horário de funcionamento" deverá ter os estados aberto e fechado, o estado será alterado conforme o horário do navegador do usuário.

<br>

### Nível Difícil

- [ ] Todos os requisitos do nivel fácil e médio

- [ ] Criar as seguintes seções: Nossa realeza, Publicações do instagram.

- [ ] Buscar a lista de itens do cardápio via API.

- [ ] Buscar a lista de depoimentos via API.

- [ ] Na seção "Nossa realeza" os depoimentos deverão estar em um carrossel funcional.

- [ ] O texto de cada depoimento deverá estar limitado em quatro linhas, você pode usar a propriedade clamp do css.
