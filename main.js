function petsCtrl ($scope) {
	$scope.pets = [
		{name: "Dr. Doom", image:"http://placekitten.com/150/150", adopted:false},
		{name: "Wilson", image:"http://placekitten.com/151/150", adopted:false},
		{name: "Tuna", image:"http://placekitten.com/152/150", adopted:false}
		];

		$scope.addNewPet = function() {
			$scope.pets.push({name: $scope.newPetName, image: $scope.newPetImage, adopted: false});
			$scope.newPetImage = "";
			$scope.newPetName = "";
		};

		$scope.adopted = function() {
			var gonePets = $scope.pets;
			$scope.pets = [];
			angular.forEach(gonePets, function(pet) {
				if (!pet.adopted) $scope.pets.push(pet);
			});
		};

}

