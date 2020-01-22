---
categories:
- Serverless
date: 2019-11-11
published: true
status: publish
tags:
- serverless
- google cloud
- functions
title: 'Utilizando Google Cloud Functions'
type: post
author: Luís Fernando Guedes
url: /2019/11/11/utilizando-google-cloud-functions/
---

Antes, gostaria de contextualizar um pouco sobre essas duas coisas: **Serverless** e **Functions**.


# Sobre Serverless e Functions

Afinal, o que é Serverless? Fazendo uma tradução livre, seria "arquitetura sem servidor". Mas como isso? Segundo esse [link](https://aws.amazon.com/pt/lambda/serverless-architectures-learn-more/) da AWS seria você poder ter aplicações e serviços sem necessariamente ter que configurar uma infraestrutura, por exemplo. Ou seja, esse trabalho fica por conta dos Cloud Providers que configuram, gerenciam, monitoram e escalam. Cuidam da saúde da sua aplicação sem que necessariamente você tenha que montar um servidor, instalar um sistema operacional, habilitar regras de segurança, e por aí vai... Fora os trabalhos e complexidades adicionais que exigem quando você administra servidores.

Mas Guedes, me conta, já estou habituado a tomar conta de servidores, na minha empresa tenho pessoas alocadas pra isso, preciso mesmo desse tal de Serverles? Não! Nada é bala de prata na tecnologia, absolutamente nada. Cada solução e ferramenta se encaixa melhor em situação X ou Y. Na minha modesta opinião, acredito em arquiteturas serverless principalmente para a construção de validações de produto e partes específicas de uma aplicação. Lembre-se que ter a infraestrutura em suas mãos ainda te dá o controle total de configurar para suas especificidades.

Um outro ponto interessante é a respeito da redução de custos ou economia financeira que uma arquitetura desse tipo pode gerar, ao não ter um servidor alocado permanentemente mesmo em momentos que seu serviço exige menos recursos, você paga pelo total. Utilizando serviços provisionados pela nuvem, você paga apenas pelo consumo. E no caso da Google Cloud Functions, pasmem, o serviço [não cobra](https://cloud.google.com/functions/pricing) até os dois primeiros **milhões** de invocações.

# Google Cloud Functions na prática

Estou trabalhando em um projeto pessoal por hobby que consiste em um crawler que extrai e parseia os dados de sessões dos filmes por cinema e salva essas informações em um banco de dados não relacional, para posteriormente ser servido através de uma API. Já faz algum tempo que trabalho nisso, já tentei algumas abordagens pra tentar deixar a coisa e a rotina mais automática possível. Já tentei utilizar módulos dentro de um conjunto de containers utilizando docker swarm na digital ocean, já tentei usar soluções da IBM Cloud, mas nenhuma sem dúvida atendeu melhor essa necessidade, além de ter custo zero do que o Google Cloud que possui free tiers interessantes.

![Fluxo](/cloud-functions/flow.png)
