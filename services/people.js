angular.module('hello').service('PeopleService', function($http) {
  var service = {
    getAllPeople: function() {
      // return $http.get('data/people.json', { cache: true }).then(function(resp) {
      //   return resp.data;
      // });
      return [
        {
          "id": "293",
          "isActive": false,
          "eyeColor": "brown",
          "name": "Ingrid Townsend",
          "company": "JASPER",
          "email": "ingridtownsend@jasper.com",
          "address": "690 Charles Place, Santel, Northern Mariana Islands, 3791"
        },
        {
          "id": "581",
          "isActive": true,
          "eyeColor": "blue",
          "name": "Estrada Nolan",
          "company": "FIBRODYNE",
          "email": "estradanolan@fibrodyne.com",
          "address": "317 Seeley Street, Cade, Maryland, 3976"
        },
        {
          "id": "29",
          "isActive": true,
          "eyeColor": "brown",
          "name": "Laverne Andrews",
          "company": "INTRAWEAR",
          "email": "laverneandrews@intrawear.com",
          "address": "760 Provost Street, Valle, Alaska, 4628"
        },
        {
          "id": "856",
          "isActive": false,
          "eyeColor": "green",
          "name": "Hull Woodward",
          "company": "SENMAO",
          "email": "hullwoodward@senmao.com",
          "address": "452 Union Avenue, Hachita, Palau, 9166"
        },
        {
          "id": "2321",
          "isActive": false,
          "eyeColor": "green",
          "name": "Maria Stanley",
          "company": "EYERIS",
          "email": "mariastanley@eyeris.com",
          "address": "350 Remsen Avenue, Abrams, Ohio, 6355"
        }
      ]
    },
    
    getPerson: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }
      
      return service.getAllPeople().then(function (people) {
        return people.find(personMatchesParam)
      });
    }
  }
  
  return service;
})