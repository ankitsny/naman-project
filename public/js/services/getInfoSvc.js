angular.module("app.services")
.factory("GetResultsSvc", ["$http", "$q", "$rootScope", 
	function($http, $q, $rootScope){

		this.getInfoFromBihar = function(){
			var deferred = $q.defer();
			$http({
				method : "GET",
				url    : "https://data.gov.in/api/datastore/resource.json?resource_id=3f328009-8f64-426d-9228-750a3fe8e326&api-key=731b0fd3749c97b0441a7662fb26e0f3"
			}).then(function(resp){
				// console.log(resp);
				deferred.resolve(resp);
			}, function(err){
				deferred.reject(err);
			});
			return deferred.promise;
		}

		this.getInfoFromTelangana = function(){
			var deferred = $q.defer();
			$http({
				method : "GET",
				url    : "https://data.gov.in/api/datastore/resource.json?resource_id=071758ef-8b2b-4ff6-8774-bcf782214779&api-key=731b0fd3749c97b0441a7662fb26e0f3"
			}).then(function(resp){
				// console.log(resp);
				deferred.resolve(resp);
			}, function(err){
				deferred.reject(err);
			});
			return deferred.promise;
		}

		return this;
	}
]);