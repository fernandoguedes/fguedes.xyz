---
categories:
- Microsserviços
- Opinião
date: 2019-02-04
published: true
status: publish
tags:
- hype
- microsserviços
- opinião
title: 'O que não te contaram sobre microsserviços'
type: post
author: Luís Fernando Guedes
url: /2019/02/04/o-que-nao-te-contaram-sobre-microsservicos/
---

> Antes de continuar saiba: é apenas mais outro post sobre microsserviço e é mais
um lembrete do que um aviso. E ah, talvez vocẽ encontre coisas óbvias.

Sempre que leio algo ou assisto palestras acerca do assunto, poucas vezes pontuam os problemas que você ganha - sim, pois não tinha - ao utilizar microsserviços.

## Inspiração

Uma coisa que sempre me incomodou foi a a _"glamourização"_ que se cria não só em torno do assunto como também do tal chamado "hype" nos setores e comunidades de tecnologia.

Por participar ativamente da comunidade JavaScript sei que esses "problemas"
são constantes nesse meio. Recorrência sobre: "o framework que eu uso é
melhor que o seu", ou, a um tempo atrás quando me indagaram "nossa, você ainda não usa isso?", se referindo ao fato de eu não
usar [yarn](https://yarnpkg.com/en/), na época uma ferramenta recém lançada. Aliás, considerando o fato do [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) ser de 1989,
sim, o yarn ainda é algo recente, mas isso é assunto pra outro post.

## Desmitificando Microsserviços

Microsserviços te ajudam a economizar com infraestrutura? Sim. Microsserviços
tornam o processo de desenvolvimento e distribuição mais complexo? Sim.
Microsserviços melhoram a manutenabilidade das suas aplicações? Sim. Microsserviços
dificultam achar com maior rapidez o ponto certo de um erro na sua _stack_? Sim.

São muitas as perguntas. As respostas podem ser negativas ou
positivas e que para serem respondidas dependem do contexto passado, presente e futuro que você, sua equipe e
sua empresa definem. A análise, o diálogo e a troca de experiências com outras
empresas e pessoas é essencial para ~~tentar~~ obter sucesso.

> Sei que parece óbvio, mas: não vá para microsserviços só por ir, por **"hype"**. Definitivamente, não faça isso!

Porém, como dizia um palestrante falando sobre microsserviços uma vez: "apesar dos *cases* de sucessos da Netflix e AWS, lembre-se: você não é Netflix e nem AWS!".
Isso é algo que concordo em parte, você não pode simplesmente comparar de forma
crua. Provavelmente o seu serviço não tem [118,9 milhões de assinantes](https://www1.folha.uol.com.br/mercado/2018/04/netflix-atinge-1189-milhoes-de-assinantes.shtml) e nem é responsável por [15% do tráfego mundial da internet](http://fortune.com/2018/10/02/netflix-consumes-15-percent-of-global-internet-bandwidth/), mas pode ter 1 milhão de acessos únicos mensais ou ter que operar com uma massa de dados muito grande, o que torna a ideia de evoluir a arquitetura mais palpável. Talvez ir para microsserviços seja a melhor saída mas saiba das dificuldades antes de escolher e aplicar essa arquitetura.

Quando você e sua equipe resolverem seguir por esse caminho não será fácil, na
verdade será bem difícil, e apesar de ~~talvez~~ vocês se livrarem de alguns
problemas, ganharão outros, por isso reforço: pense, troque experiências, desenhe, arquitete antes de
tomar qualquer decisão.

## Com ou sem "dor"?

Tive uma experiência em que um monolítico gerava muito esforço voltado pra manutenção - muitas vezes "entregando software", porém, sem valor ao cliente. Era bem difícil fazer as
coisas nele, não seguia padrões, não haviam testes, utilizava uma tecnologia que
nos impossibilitava de *conteinerizar*, enfim: um **caos**. Depois de longas reuniões onde mensuramos os custos resolvemos então migrá-lo para uma arquitetura mais enxuta e que fosse
possível alocá-lo junto com os nossos outros serviços em uma estrutura com recursos compartilhados utilizando *[Kubernetes](https://kubernetes.io/)*.

A "dor" veio e tivemos que tomar uma decisão naquele momento. Em seguida, devido
ao sucesso, com mais experiência e segurança no que estávamos fazendo, começamos
a distribuir responsabilidades desse serviço em outros utilizando [nginx](https://www.nginx.com/) para fazer o roteamento progressivo.

Fomos fazendo a distribuição aos poucos, movendo rota a rota, funcionalidade a
funcionalidade, porque também teríamos que paralelizar migração e entrega
de novas _features_.

## Pontos de Atenção

- É muito legal você poder utilizar recursos em diferentes linguagens para resolver problemas específicos, porém, antes de adotar essa arquitetura que envolva multilinguagens, tenha certeza que sua equipe está preparada e nivelada para dar manutenção e criar serviços nessas linguagens. Isso pode evitar que haja sobrecarga sobre algum membro.

- Outro problema recorrente é a complexidade para *debuggar* processos que envolvam
mais de uma aplicação.

- Rodar o ambiente local com muitos microsserviços? Microfrontends?! Outro empecilho.

- Crie padrões de desenvolvimento para cada linguagem que você vai utlizar,
automatize esse processo de verificação utilizando _pipelines_.

- Aliás, falando em automatização, já pensou ter que fazer deploy de tudo isso
depois de cada *Pull Request*? Sem condições. Automatize ~~se possível~~ todo o seu
processo de integração e deploy.

- Priorize testes de integração, eles envidenciarão gargalos e inconsistências entre
microsserviços. Se utiliza microfrontends e/ou biblioteca própria de
componentes, **faça** testes end-to-end.

- Defina entre a equipe coisas básicas, como por exemplo, como funcionará nomenclatura de rotas. Use referências.

- Se utiliza _Docker_ como ferramenta de container, recomendo o [docker-compose](https://docs.docker.com/compose/) para "orquestrar" a estrutura de serviços localmente.

Apesar dos *hypes*, existem sim as melhores ferramentas. Porém ~~como quase tudo
nessa vida~~, vai depender para qual
finalidade que você quer utilizá-la. Existem as que
exigem uma curva de aprendizado maior e que entregam um excelente valor,
outras nem tanto. Existem ferramentas plugáveis com curva de aprendizado quase
nulas que também entregam excelentes resultados, outras nem tanto. Ou seja, não siga o fluxo. Procure prós e
contras e principalmente qual se encaixa melhor no que você está construindo.

Ferramentas servem para agilizar, automatizar, melhorar, tornar o seu trabalho
mais produtivo, não atrasá-lo.

> Não faça refatoração e nem distribua sua aplicação em microsserviços
precocemente. Se você acha que fez isso e está tendo mais trabalho para manter
do que antes, **reavalie a necessidade**.

## Estimativas + Microsserviços

Quando você tem várias etapas e serviços e é preciso criar estimativas, o
processo acaba ficando um pouco mais difícil. Pode ser que hajam erros, porém,
como ciclo base do _scrum_, faça sempre as _reviews_ evidenciando onde houve o
erro.

Começamos a experimentar recentemente o mapeamento de aplicações x impacto, em
um primeiro momento nos ajudou a visualizar o todo.
