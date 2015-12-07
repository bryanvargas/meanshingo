    angular.module('appTareas', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('alta', {
                url: '/alta',
                templateUrl: 'views/alta.html',
                controller: 'ctrlAlta'
            })
            .state('editar', {
                url: '/editar/{id}',
                templateUrl: 'views/editar.html'
            });
        $urlRouterProvider.otherwise('alta');
    })
    .controller('ctrlAlta', function ($scope) {
        $scope.tarea = {};
        $scope.tareas = [];

        $scope.prioridades = ['Baja', 'Normal', 'Alta'];

        $scope.agregar = function () {
            $scope.tareas.push({
                nombre: $scope.tarea.nombre,
                prioridad: parseInt($scope.tarea.prioridad)
            })
        }
    })
