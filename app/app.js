(function(){
	angular.module('Questions', [])
	.controller('MainCtrl', ['$scope', function($scope){

		$scope.currentQuestion = 1;



		$scope.complete = false;

		$scope.set = []// Define all question here comma seperated



		//input your questions here
		$scope.questions = {}

		$scope.numOfQuestions = Object.keys($scope.questions).length


		$scope.display = $scope.questions[$scope.currentQuestion];



		$scope.nextQ = function(answer){
			var progressBar = 100 / $scope.numOfQuestions;

			$scope.questions[$scope.currentQuestion].A = answer

			if ($scope.currentQuestion < $scope.numOfQuestions){
				$scope.currentQuestion += 1;
			} 
			else {
				$('.progress-bar').animate({
		  	 		'marginLeft' : "+="  + progressBar + "%"
				 });
				$scope.complete = true;
				return;
			}
			$scope.display = $scope.questions[$scope.currentQuestion]; //changes display
			
			$scope.answer = ""; //clears input on next question

			$('#form-wrap').animate({
				'marginTop' : "-=148px"
			})
			$('#form-wrap').animate({
				'marginTop' : "+=148px"
			})
			$('.progress-bar').animate({
		  	 'marginLeft' : "+="  + progressBar + "%"
			 });
		}


		(function(){
			$.each($scope.set, function( index, value){$scope.questions[index] = {Q: value, A: ""}})
			console.log($scope.questions);
		}()) // Build question data structure

	}])

	.directive('survey', function(){
		return {
			restrict: "E",
			templateUrl: "app/questions.html"
		}
	});



	//set progress bar first!!

	
}())



