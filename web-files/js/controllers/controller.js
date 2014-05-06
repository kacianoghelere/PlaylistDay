'use strict';

var ctrl = angular.module('Controller', ['Services']);

ctrl.controller('searchCtrl', function($scope, getSearchList){

		//ini array
		$scope.search = {procura: 'nickelback'};

		$scope.getSearchList = function() {
			//var / enquanto false loading
			$scope.searchTemp = false;

			getSearchList.get($scope.search.procura).then(function(result){
					$scope.arPlaylist = result.data;
					//remove loading
					$scope.searchTemp = true;
			});

		};

		//carrega getSearchList
		var appini = function(){
			//iniciando
			$scope.getSearchList();
		}

		//startApp
		appini();

});

ctrl.controller('playerCtrl', function($scope, $window){

		//ini array com valor
		$scope.playlist = [{id:'', idx:'0__OYCAJAz8', title:'Playlistday.com.br. O que é?'}];
		var player;

		$window.onYouTubeIframeAPIReady = function () {
			player = new YT.Player('player',{
		    	width:'587',height:'587',videoId: $scope.playlist[0].idx,
		    	playerVars:{modestbranding:1,wmode:"opaque"},
		    	events:{'onReady':onPlayerReady,'onStateChange':onPlayerStateChange}
			});

			$scope.$apply(function() {
				$scope.player = player;
				$scope.id = 0;
			})

		};

		$scope.atualPlay = function (){
			document.getElementById($scope.id).style.background="#888888";
		}

		$scope.loadPlay =  function (id){
			player.loadVideoById($scope.playlist[id].idx);
			$scope.id = id;
		}

        function onPlayerReady(event){
            // event.target.loadVideoById($scope.playlist[0].idx);
            player.pauseVideo();
        }

		function onPlayerStateChange(event){

			if(event.data == YT.PlayerState.PLAYING){
				$scope.atualPlay();
			}

			if(event.data == YT.PlayerState.ENDED){
				$scope.id++;
                if($scope.id < $scope.playlist.length){
                    player.loadVideoById($scope.playlist[$scope.id].idx);
                }else{
                	$scope.id=0;
                	player.loadVideoById($scope.playlist[$scope.id].idx);
                }

			}

		}

		$scope.addPlaylist = function(idx, titlex){
			$scope.item = {id:'', idx:idx, title:titlex};
			$scope.playlist.push($scope.item);
		}

		$scope.removeItem = function(id){

			if(id == $scope.id){

				$scope.playlist.splice($scope.id, 1);
				$scope.loadPlay($scope.id);

			}else{

				$scope.playlist.splice(id, 1);
				$scope.id--;
			}
			
		}

		$scope.playVideo = function(){
			player.playVideo();
		}

        $scope.pauseVideo = function (){
            player.pauseVideo();
        }

        $scope.proxVideo = function (){
            $scope.id++;
            player.loadVideoById($scope.playlist[$scope.id].idx);
            $scope.atualPlay($scope.id);
        }

        $scope.prevVideo = function (){
            $scope.id--;
            player.loadVideoById($scope.playlist[$scope.id].idx);
            $scope.atualPlay($scope.id);
        }

});