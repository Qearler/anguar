var myApp = angular.module('hello', ['ui.router']); // 'ui.router.state.events'

myApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { name: 'hello', url: '/hello', component: 'hello' },
    { name: 'about', url: '/about', component: 'about' },
    
    { 
      name: 'people', 
      url: '/people', 
      component: 'people',
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },
    
    { 
      name: 'people.person', 
      url: '/{personId}', 
      component: 'person',
      resolve: {
        person: function(people, $stateParams) {
          return people.find(function(person) { 
            return person.id === $stateParams.personId;
          });
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});


// myApp.run(function($http, $uiRouter) {
//   var Visualizer = window['ui-router-visualizer'].Visualizer;
//   $uiRouter.plugin(Visualizer);
//   $http.get('data/people.json', { cache: true });
// });


myApp.run(['$rootScope', '$log','$state', '$transitions', function ($rootScope, $log, $state, $transitions) {
  console.log('done')

  $transitions.onSuccess({}, function(transition) {
    _hmt && _hmt.push(['_trackPageview', window.location.href]);
    // URL必须是以"/"（斜杠）开头的相对路径, 如果是hash模式, 要在前面加 /#
    // _hmt && _hmt.push(['_trackPageview', '/#' + to.fullPath]);
    // console.log(transition);
    // console.log(transition.from());
    // console.log(
    //     "Successful Transition from " + transition.from().name +
    //     " to " + transition.to().name
    // );
  });

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$log.debug('successfully changed states') ;
 
		$log.debug('event', event);
		$log.debug('toState', toState);
		$log.debug('toParams', toParams);
		$log.debug('fromState', fromState);
    $log.debug('fromParams', fromParams);
    
    

    console.log('event', event);
		console.log('toState', toState);
		console.log('toParams', toParams);
		console.log('fromState', fromState);
    console.log('fromParams', fromParams);
	});
 
	$rootScope.$on('$stateNotFound', function (evt, next, current) {
		// write callback here
		//alert("$stateNotFound");
		console.log("$stateNotFound");
	});
 
	$rootScope.$on('$stateChangeError', function (current, previous, rejection) {
		//alert("error");
	});
 
	//定义一个全局函数，在所有的地方都能够访问得到
	$rootScope.goTo = function(targetName){
		$state.go(targetName)
	}
}]);