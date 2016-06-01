angular.module("app.controllers")
.controller("SearchController", ["$scope", "$location", "GetResultsSvc", "$rootScope", 
	function($scope, $location, GetResultsSvc, $rootScope){


		// https://data.gov.in/api/datastore/resource.json?resource_id=3f328009-8f64-426d-9228-750a3fe8e326&api-key=731b0fd3749c97b0441a7662fb26e0f3     bihar
		// 
		// https://data.gov.in/api/datastore/resource.json?resource_id=071758ef-8b2b-4ff6-8774-bcf782214779&api-key=731b0fd3749c97b0441a7662fb26e0f3     telangana
		
		$scope.selected = undefined;
		var _selected;
		$scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
		$scope.go = function(){
			if(!$scope.selected) return;
			$location.path('/'+$scope.selected);
		}

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

				console.log($rootScope.companies.length);
				console.log($rootScope.records.length);



			}, function(err){
				console.log("error occured [Telangana]");
				console.log(err);
			});
		}, function(err){
			console.log("Error occured [bihar]");
			console.log(err);
		});
		
	}
]);