<!doctype html>
<html lang="pt-BR" ng-app="appPlay">
<head>
	<meta charset="UTF-8" />
	<title> Playlist Day - Por que a música move as pessoas e as pessoas movem o mundo! </title>
	<link rel="stylesheet" href="http://www.playlistday.com.br/web-files/css/estilo.css" />
	<script type="text/javascript" src="http://www.playlistday.com.br/web-files/js/angular.min.js"></script>
	<script type="text/javascript" src="http://www.playlistday.com.br/web-files/js/appPlay.js"></script>
	<script type="text/javascript" src="http://www.playlistday.com.br/web-files/js/controllers/controller.js"></script>
	<script type="text/javascript" src="http://www.playlistday.com.br/web-files/js/services/services.js"></script>
</head>
<body ng-controller="playerCtrl">
	
	<header id="topo">
	
		<div id="tp-centro">

			<div class="tp-marca">
				<a href="http://www.playlistday.com.br/">
					<img src="http://www.playlistday.com.br/web-files/imagem/logo.png">
				</a>
			</div><!-- Fim .tp-marca -->

		</div><!-- Fim #tp-centro -->

	</header><!-- Fim #topo -->

	<section id="content">

		<div class="cont-esq">

			<div id="player"></div><!-- Fim #player -->
		
			<div class="search" ng-controller="searchCtrl">
				
				<form class="fr-search" ng-keypress="getSearchList();">
					<input ng-class="{'search-bk': !searchTemp}" ng-model="search.procura" type="text" placeholder="musicas, playlists, álbuns completos">
				</form>
		
				<div class="results">
					<ul ng-repeat="item in arPlaylist.data.items">
						<li ng-dblclick="addPlaylist(item.id, item.title);" ><img src="http://i1.ytimg.com/vi/{{item.id}}/default.jpg"><span>{{item.title}}</span></li>
					</ul>
				</div><!-- Fim .results -->

			</div><!-- Fim #search -->

		</div><!-- Fim .cont-esq -->

		<div class="repro">
			
			<h3> em reprodução ...</h3>

			<div class="playlist">
				<ul ng-repeat="item in playlist">
					<li id="{{$index}}" ng-dblclick="loadPlay($index);"><img ng-click="removeItem($index);" src="web-files/imagem/remove.png"/>{{item.title}}</li>
				</ul>
			</div><!-- Fim .playlist -->

			<div class="controls">
				
				<h3> controls </h3>

				<ul>
					<li ng-click="prevVideo();"><img src="http://www.playlistday.com.br/web-files/imagem/prev.png"/></li>
					<li ng-click="playVideo();"><img src="http://www.playlistday.com.br/web-files/imagem/play.png"/></li>
					<li ng-click="pauseVideo();"><img src="http://www.playlistday.com.br/web-files/imagem/pause.png"/></li>
					<li ng-click="proxVideo();"><img src="http://www.playlistday.com.br/web-files/imagem/next.png"/></li>
				</ul>
			</div><!-- Fim #controls -->

		</div><!-- Fim .repro -->

	</section><!-- Fim #content -->	

	<footer id="rodape">
		beta 24.0a - contato@playlistday.com.br - Felipe, o Homem-Gato
	</footer> <!-- Fim #rodape -->

</body>
</html>
