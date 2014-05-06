'use strict';

var service = angular.module('Services',[]);

//search na api Youtube (url)
service.factory('getSearchList', function($http){
	return {
		get: function(search){

			return $http({method:'GET', url:'https://gdata.youtube.com/feeds/api/videos?v=2&q='+search+'&max-results=49&category=Music&alt=jsonc'}).
					success(function(data){
						// console.log('ok');
						// console.log(data);
					}).
					error(function(){
						console.log("ERRO LIST API");
					});

		}
	}
});