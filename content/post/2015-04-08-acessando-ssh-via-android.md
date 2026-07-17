---
categories:
- Linux
date: 2015-04-08T18:31:09Z
feature-img: assets/2015-04-08/ssh.jpg
draft: false
status: publish
tags:
- ssh
- software livre
- android
title: Acessando SSH via Android
type: post
url: /2015/04/08/acessando-ssh-via-android/
---

Estava na fila do banco, naquele marasmo, naquela demora, e pensando: e se eu pudesse acessar meu servidor através do celular e ir adiantando o que eu pudesse?

E se eu precisasse fazer algo urgente e não tivesse nenhum computador por perto ou um *dashboard* que pudesse ser acessado via browser?

Então, comecei a pesquisar meios através do Android de fazer isso, e vou compartilhar com vocês a maneira mais fácil que eu encontrei.

### Instalando o app e gerando a chave pública (ssh-key)

Entre os diversos apps que eu testei, o mais simples e objetivo foi o [SSH Client](https://play.google.com/store/apps/details?id=com.anstudios.ssh), por isso o escolhi.

Primeiramente, é necessário gerar uma chave pública no seu Android. Ela será usada pelo seu servidor para autorizar o acesso do seu dispositivo à ele.

Abra o aplicativo 

*Tip: clique na imagem para visualizá-la inteira*

<div class="post-image" style="overflow: hidden; width: 540px; height: 340px; text-align: center;">
    <img class="post-image" src="/assets/2015-04-08/ss_1.png" alt="Tela inicial do app SSH Client no Android" />
</div>


Clique no menu, gerar.


<div style="overflow: hidden; width: 540px; height: 340px; text-align: center;">
    <img class="post-image" src="/assets/2015-04-08/ss_2.png" alt="Menu do SSH Client com a opção de gerar chave destacada" />
</div>
<br />
Siga os passos, escolha o nome, a forma de criptografia e senha, se desejar.

<div style="overflow: hidden; width: 540px; height: 340px; text-align: center;">
    <img class="post-image" src="/assets/2015-04-08/ss_3.png" alt="Formulário de geração de chave SSH com nome, algoritmo e senha" />
</div>
<br />
Clique no menu novamente, e copie a chave pública.

<div style="overflow: hidden; width: 540px; height: 340px; text-align: center;">
    <img class="post-image" src="/assets/2015-04-08/ss_4.png" alt="Tela do SSH Client mostrando a chave pública gerada para copiar" />
</div>
<br />

### Servidor

Para conseguir acessar, em definitivo, você precisa adicionar o acesso à chave ao servidor.

Com acesso root, adicione a chave gerada no Android ao arquivo que se encontra em ~/.ssh/authorized_keys, feito isso, o acesso está liberado, enjoy!

<div style="overflow: hidden; width: 540px; height: 340px; text-align: center;">
    <img class="post-image" src="/assets/2015-04-08/ss_5.png" alt="Terminal do Android com sessão SSH aberta no servidor" />
</div>

<div id="image-modal"></div>

<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script>
    $('.post-image').on('click', function() {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt') || '';
	var img = $('<img>').attr({ src: src, alt: alt });
	$('#image-modal').empty().append(img);
	$('#image-modal').dialog({
	    modal: true
	});
	$('.ui-dialog-titlebar').removeClass('ui-widget-header');
    });
</script>

