;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";
    $scope.method = 'GET';

    $scope.fetch = () => {
    	console.log('url', $scope.url);
    	console.log('method', $scope.method);

    	switch($scope.method) {
    	case 'GET':
		      requestService.get($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
		    case 'POST':
		    	requestService.post($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
		    case 'OPTIONS':
		    	requestService.options($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
		    case 'HEAD':
		    	requestService.head($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
    	}//end switch
    };
  });
})();