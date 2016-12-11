/**
 * Created by GrandCharles on 10/12/2016.
 */
(function () {
    angular.module('pdApp').controller('CadastroProduto', CadastroProduto);

    CadastroProduto.$inject = ['$rootScope'];

    function CadastroProduto($scope,
                             $rootScope,
                             $state,
                             AlertService,
                             $filter) {

        var vm = this;
        var indice = 0;
        var incluir = true;

        vm.entidade = {};

    }
})();
