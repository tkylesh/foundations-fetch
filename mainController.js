;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "https://nss-responsecodes.herokuapp.com/200";
    $scope.method = 'GET';

    $scope.fetch = () => {
    	console.log('url', $scope.url);
    	console.log('method', $scope.method);

    	switch($scope.method) {
    	case 'GET':
    		var sendDate = (new Date()).getTime();
		      requestService.get($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		        var receiveDate = (new Date()).getTime();
        		var responseTimeMs = receiveDate - sendDate;
        		console.log('response time: ', `${responseTimeMs} ms`);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
		    case 'POST':
		    	var sendDate = (new Date()).getTime();
		    	requestService.post($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		        var receiveDate = (new Date()).getTime();
		        var responseTimeMs = receiveDate - sendDate;
        		console.log('response time: ', `${responseTimeMs} ms`);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
		    case 'OPTIONS':
		    	var sendDate = (new Date()).getTime();
		    	requestService.options($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		        var receiveDate = (new Date()).getTime();
		        var responseTimeMs = receiveDate - sendDate;
        		console.log('response time: ', `${responseTimeMs} ms`);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
		    case 'HEAD':
		    	var sendDate = (new Date()).getTime();
		    	requestService.head($scope.url).then((success) => {
		        const response = new Response(success);
		        $scope.responses.push(response);
		        console.log('responses', $scope.responses);
		        var receiveDate = (new Date()).getTime();
		        var responseTimeMs = receiveDate - sendDate;
        		console.log('response time: ', `${responseTimeMs} ms`);
		      }, (error) => {
		        debugger
		        //do something else
		      });
		    break;
    	}//end switch
    };
  });
})();