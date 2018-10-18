  // script.js

var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
    	$routeProvider

            // route for the home page
            .when('/', {
            	templateUrl : 'assets/pages/home.html',
            	controller  : 'mainController'
            })
            .when('/test', {
                templateUrl : 'assets/pages/test.html',
                controller  : 'mainController'
            })
 			.when('/members/2018-2', {
            	templateUrl : 'assets/pages/2018-2.html',
            	controller  : 'peopleController'
            })

            .when('/members/2018-1', {
                templateUrl : 'assets/pages/2018-1.html',
                controller  : 'peopleController'
            })
            // route for the about page
            .when('/about', {
            	templateUrl : 'assets/pages/about.html',
            	controller  : 'aboutController'
            })
            .when('/home', {
            	templateUrl : 'assets/pages/home.html',
            	controller  : 'mainController'
            })

            // route for the contact page
            .when('/contact', {
            	templateUrl : 'assets/pages/contact.html',
            	controller  : 'contactController'
            })

            .when('/members', {
            	templateUrl : 'assets/pages/members.html',
            	controller  : 'contactController'
            });
        });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        
    });
    scotchApp.controller('peopleController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    $scope.hoverIn = function(event){
            //  this.hoverEdit = true;
            var el = getElement(event);
            // Do something with element, for example add a class
            $('#selected').addClass('añadir');
            console.log('hoverIn ' + el.attr('src'));
                    $scope.imagen = el.attr('src');
                    $scope.nombre=el.attr('nombre');
                    $scope.carrera=el.attr('carrera');
                    $scope.universidad=el.attr('universidad');
                    $scope.hobbies=el.attr('hobbies');
          };
    $scope.hoverOut = function(event){
                    var el = getElement(event);
            $('#selected').removeClass('añadir');
        };
    function getElement(event) {
        return angular.element(event.srcElement || event.target);
    }
    });
    scotchApp.controller('aboutController', function($scope) {
    	$scope.message = 'Look! I am an about page.';


    /*	$scope.hoverOut = function(event){
    			    var el = getElement(event);
    		el.removeClass('active');
    		$('.ızgara').children('.kolon').not('.active').removeClass('inactive');
    	};

    	$scope.hoverIn = function(event){
    			  
	    var el = getElement(event);

    		el.addClass('active'); $('.ızgara').children('.kolon').not('.active').addClass('inactive');
    	};*/
    });
function getElement(event) {
		return angular.element(event.srcElement || event.target);
	}
    scotchApp.controller('contactController', function($scope) {
    	$scope.message = 'Contact us! JK. This is just a demo.';
    });



$(document).on('ready', function() {
     console.log("READY SHIT");
    });
