---
categories:
- Futebol 
date: 2026-10-09
draft: false
status: publish
tags:
- futebol
- aprendizado
- dados
title: 'As cores mais vitoriosas do futebol brasileiro'
type: post
author: Luís Fernando Guedes
url: /2026/10/09/as-cores-mais-vitoriosas-do-futebol-brasileiro/
---

Olá! Vou contar uma breve história sobre aprender fazendo. Ou seria fazer e aprender?

Em um mundo cada vez mais rápido, onde a atenção das pessoas é disputada de maneira radical, pensei, que serventia esse post vai ter? Em uma negociação mental resolvi escrever. Afinal, quando iniciei esse blog lá por 2008 eu não tinha nenhuma ambição nesse sentido. Seria meu simples espaço, algo como um bloco de notas público. Espaço esse que uso pra compartilhar aprendizados, tecnologia e *otras cositas más* como viagens, filmes e aleatoriedades.

## Pragmatismo e *baby steps* (alô eXtreme Programming)

Por volta de 2018 me deparei com uma curiosidade, digamos, excêntrica:

> Qual é a cor mais vitoriosa do futebol brasileiro?

Beleza. Vamos ao quadro branco:

- De onde extrair as informações da lista dos campeões de maneira confiável?
- Consigo dados estruturados?
- Onde vou conseguir o escudo dos times?
- Quais campeonatos devo considerar?
- Deve haver uma data de corte?
- E se as fontes divergirem?
- Cada campeonato tem um peso?
- Como vou extrair as cores?

### Mão na massa

Após algumas análises (realizadas por esse *agente humano* que vos escreve) percebi que utilizar mais de uma fonte me renderia um esforço extra para consolidar as informações e resolver os conflitos entre elas. Qual é mais confiável? Não, deixa isso pra lá. A Wikipedia teria tudo: tabelas, histórico, campeonatos e de brinde, o escudo de cada time. O próximo passo natural seria encontrar uma maneira de baixar as informações de vários campeonatos: Estaduais, Copa do Brasil e Campeonato Brasileiro.

Idealmente tinha pensado em dar um peso por campeonato, mas confesso que tava tão longe dessa etapa que decidi deixar de lado em um primeiro momento. Quando voltei ao projeto, anos depois, tive que remover os estaduais e trazer o peso de volta, senão a análise final ficaria desbalanceada.

Para a data de corte, optei por seguir a partir de 1971, que é o mais parecido com o Campeonato Brasileiro que temos até hoje.

Montei um crawler simples utilizando todo o conhecimento e estrutura de um projeto que havia brincado anos antes que apelidei carinhosamente de [Gollum](https://github.com/fernandoguedes/gollum). Passos:

1. Vai na URL da Wikipedia (que eu havia coletado anteriormente);
2. Dado o XPath do DOM na página extraia a informação de campeão e vice-campeão daquele ano;
3. Armazene em um CSV com: ano, campeonato, time e posição.

Depois fiz outro script simples que concatenava esses CSVs e gerava um arquivo único. Pronto.

### Nada é tão fácil quanto parece

Uma das coisas que o crawler fazia era baixar junto o escudo do time que ficava ao lado da tabela de cada campeonato. Minha ideia era analisar um a um e pegar as cores de cada, afinal, não devem ser muitos. Bom não lembro o número exato agora mas eram mais de 50 (!) times. Possível de ser feito, mas *corno job* nunca foi a minha praia - embora recorrentemente fosse/seja necessário. Risos.

Parte do trabalho estava encaminhado: eu tinha uma planilha com os campeões consolidados, as imagens dos escudos e o próximo passo seria extrair as cores. Nasce o *Rigabe* com uma proposta simples: a partir de uma imagem extraia as cores principais em [HEX](https://developer.mozilla.org/en-US/docs/Glossary/html_color_codes). Eu lembro de ficar surpreso com a quantidade de tonalidades possíveis para vermelho, verde, azul e até preto que os times brasileiros usam.

### É complexo e parece mesmo

> Recapitulando até aqui sobre o ponto principal desse post: o aprender fazendo. Já tinha implementado crawlers para extração da Wikipedia, scripts para concatenar arquivos CSV, pelo menos uma dezena de libs de teste que me ajudassem a validar os dados, experimentado funcionalidades de manipulação de imagem em Python, Go e a [IA da IBM](https://www.ibm.com/br-pt/watson) (estamos falando de 2018, ok?).

Notei que precisava de alguns passos adicionais, como:

- Encontrar uma outra fonte com os escudos em alta definição para melhor extração das cores;
- Limitar a apenas uma cor principal, ou seja, aquela que ocupava a maior parte no escudo (sinto muito Sampaio Corrêa, o quadricolor do Maranhão);
- Remover as tonalidades, qualquer vermelho viraria `#FF0000`, preto `#000000` e assim para todas as outras;
- Correlacionar cada cor por time e consolidar na planilha final.

Na época até disponibilizei um endpoint na FaaS da IBM (que tinha um *free tier* interessante para experimentações) que dada uma imagem em base64 ele retornaria através de parametrização uma ou mais cores, com ou sem remoção de tonalidades e em HEX ou RGB. Infelizmente não sobreviveu pra contar a história.

### O aprendizado e a diversão como fim

E pensar que fiz tudo isso por pura curiosidade, vontade de aprender e nerdice. Aprendi e me envolvi com dezenas de coisas entre ferramentas, linguagens, IBM Watson (IA poderosíssima pra época), e, até história do futebol. Sem ambição nenhuma por resultados financeiros ou científicos (alô cientistas) e produtividade. Apenas pelo aprendizado e diversão. 

## A cor mais vitoriosa do futebol brasileiro

Pois bem, voltemos ao título do post. Os registros de 2018 se perderam (o endpoint na IBM não foi o único a não sobreviver pra contar a história), então resolvi refazer tudo. Dessa vez com uma IA do lado.

E aqui vale a confissão: o que me custou meses de fins de semana, entre crawler, XPath, CSVs e escudos, saiu em uma noite de conversa. A coleta, a conferência dos dados, o gráfico. Tudo.

Mas as escolhas continuaram comigo. Além das que já contei, mais algumas:

- **Só campeões**, nada de vice;
- **Cores oficiais** de cada clube em vez da cor extraída do escudo. O *Rigabe* que me perdoe;
- **Branco não conta.** Quase todo clube tem branco, então ele ganharia disparado e o post acabaria aqui.

Ah, e a IA também errou. Ao buscar as cores do Cruzeiro, veio verde, vermelho e branco: as cores do Palestra Itália, o nome do clube antes de 1942. Se ninguém conferisse, o verde ganharia 21 pontos de presente. *Agente humano* ainda tem serventia, visse?

Foram 92 títulos e 21 clubes. E o resultado?

![Pontuação das cores mais vitoriosas do futebol brasileiro](/assets/2026-10-09/grafico.svg)

**Depende.** E não estou fugindo da raia.

O problema são os clubes que têm vermelho *e* preto: Flamengo, São Paulo, Athletico, Sport e Paulista. Se eles contam como vermelho, o vermelho vence com 88 pontos contra 67 do preto. Se contam como preto, o preto dispara com 133 pontos contra 22. Azul (42) e verde (40, praticamente o Palmeiras sozinho) nem tomam conhecimento dessa briga. Sinto muito Criciúma, o amarelo segue com seu título solitário de 1991.

Ou seja: os dados não decidem a cor mais vitoriosa do futebol brasileiro. Quem decide é a regra que você escolhe para classificar um clube de duas cores.

> Mas, se me permitem uma opinião nada imparcial. O Flamengo nasceu com o DNA vitorioso do povo. A magnética Rubro-Negra tem nome e sobrenome.

As planilhas com os [campeões](/assets/2026-10-09/campeoes.csv) e as [cores de cada clube](/assets/2026-10-09/cores.csv) estão aqui, caso alguém queira refazer a conta com outra regra.

Fiz um experimento simples utilizando o [Kimi](https://kimi.ai/). Compartilhei o conteúdo do post, o guia de estilos desse tema e os CSVs. A ferramenta gerou um infográfico que eu achei muito bacana e pode ser [acessado aqui](https://m2plvynscr6tg.kimi.page/).

## O que fica

A IA acelera, e acelera muito. Mas se eu tivesse começado por ela em 2018, teria a resposta e nada mais. Não teria brincado com crawler, com manipulação de imagem em Python e Go, com Watson, nem descoberto quantos tons de vermelho os escudos brasileiros conseguem ter.

A resposta saiu rápido. A pergunta, as escolhas e a diversão continuaram sendo minhas.

Curtam a jornada, até mais e obrigado pelos peixes!
