# Projeto Solar System

  O Solar System é um projeto que exibe os planetas que compõem o nosso sistema solar e apresenta algumas das missões espaciais já realizadas. Esse foi  o `primeiro projeto` do módulo de Front End do curso de [Desenvolvedor Web da Trybe](https://www.betrybe.com/formacao-desenvolvimento-web) e e envolve o uso da biblioteca ReactJS e eestilizado utilizando CSS.
  
## Tecnologias Utilizadas
  Este projeto utiliza as seguintes tecnologias:
  
  * ReactJS (biblioteca javascript)
  * CSS
  * Docker (opcional)
  
## Habilidades Utlizadas

  Durante o desenvolvimento do Solar System, foram necessárias as seguintes habilidades:
  
  * Utilizar JSX no React

  * Utilizar corretamente o método `render()` para renderizar componentes

  * Utilizar `import` para trazer componentes em diferentes arquivos

  * Criar componentes de classe em React

  * Criar múltiplos componentes a partir de um array

  * Fazer uso de `props` corretamente

  * Fazer uso de `PropTypes` para validar as `props de um componente`

  * Fazer uso de CSS responsivo para estilizacão e resultado final

  * Criação e configuração dos arquivos dockerfile e docker-compose

  ## Preview
  
  Você pode conferir o resultado final por meio da imagem abaixo:

[<img src="screenshot.png" width=20% />](https://github.com/adfcosta/project-solar-system/blob/main/screenshot.png)

## Rodando Na Sua Maquína
Caso deseje rodar o projeto diretamente na sua máquina siga os passos a baixo

1. Clone o repositório
    * `git clone git@github.com:adfcosta/project-solar-system.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-solar-system`

#### Sem Docker
<details>
  
2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (O seu navegador provavemente será iniciado abrirá a página do Solar System)
  * Parando a execução:
    * `npm stop` (encerra sua execucão)
  
</details>

#### Utlizando Docker
<details>
  
2. Iniciando com Docker
  * No Terminal digite:
    * `docker-compose up -d`
  * Tente acessar a aplição no seu navegador digitando:
    * `http://localhost:3000/`
  * Caso ocorra algum erro, verifique se existem outros containers ou aplicações utilizando a porta:
    * `3000`
  * Para encerrar a aplição digite em seu terminal
    * `docker-compose down` 
  
</details>

 ## Créditos
  - - [@adfosta](https://github.com/adfcosta)
