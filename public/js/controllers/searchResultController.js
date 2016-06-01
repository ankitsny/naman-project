angular.module("app.controllers")
.controller("SearchResultController", ["$scope", "$routeParams", "$rootScope", "$location", "GetResultsSvc",
	function($scope, $routeParams, $rootScope, $location, GetResultsSvc){
		if($routeParams.q){
			
			function getData(){
				var index = $rootScope.companies.indexOf($routeParams.q); 
				if(index >= 0){
					$scope.company = $rootScope.records[index];
				}else{
					alert("Invalid company name");
					$location.path('/');
				}
			}

			if(!$rootScope.companies){
				GetResultsSvc.getInfoFromBihar()
				.then(function(resp){
					$scope.bihar = resp.data.records

					GetResultsSvc.getInfoFromTelangana()
					.then(function(respT){
						$scope.telangana = respT.data.records;


						$rootScope.records = $scope.bihar.concat($scope.telangana);
						$rootScope.companies = [];
						for(var i=0; i<$rootScope.records.length; i++){
							$rootScope.companies.push($rootScope.records[i]['COMPANYNAME']);
						}

						getData();	



					}, function(err){
						console.log("error occured [Telangana]");
						console.log(err);
					});
				}, function(err){
					console.log("Error occured [bihar]");
					console.log(err);
				});
			}else{

				getData();
			
			}


		}else{
			console.log("mdgfh");
		}
	}
]);