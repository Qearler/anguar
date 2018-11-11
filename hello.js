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
    // var _hmt = _hmt || [];
    // (function () {
    //   document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
    //   var hm = document.createElement("script");
    //   hm.id = "baidu_tj";
    //   hm.src = "https://hm.baidu.com/hm.js?7383097449b3ddd3a09241d55a74d9c5";
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(hm, s);
    // })();

    console.log(window.location.hash);
    _hmt && _hmt.push(['_trackPageview', '/' + window.location.hash]);
    // URL必须是以"/"（斜杠）开头的相对路径, 如果是hash模式, 要在前面加 /#
    // _hmt && _hmt.push(['_trackPageview', '/#' + to.fullPath]);
    // console.log(transition);
    console.log(transition.from());
    // console.log(
    //     "Successful Transition from " + transition.from().name +
    //     " to " + transition.to().name
    // );
  });
}]);