/**
 * Created by GrandCharles on 06/12/2016.
 */
(function () {
    angular.module('pdApp').controller('RouterController', RouterController);

    RouterController.$inject = ['$scope', '$state'];

    function RouterController($scope, $state) {
        $scope.abrirPagina = abrirPagina;

        function abrirPagina(nomeState) {
            $state.go(nomeState);
        }
    }
})();