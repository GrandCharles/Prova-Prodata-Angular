/**
 * Created by GrandCharles on 10/12/2016.
 */
(function () {
    angular.module('pdApp').controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$state', 'localStorageService'];

    function IndexController($scope, $state, localStorageService) {
        var vm = this;
        vm.titulo = 'GrandCharles 2016';
        vm.direitos = '® 2016 - Copyright - GrandCharles';

        vm.listaUsuario = [];

        vm.lstUser = [
            {
                codigo: 1,
                nome: 'Charles Vieira',
                login: 'Charles',
                email: 'grandcharles@hotmmail.com',
                senha1: '123456',
                senha2: '123456',
                dtVal: new Date(),
                tpUser: 'S'
            },
        ];

        setarInformacoesNoStorage();
        function setarInformacoesNoStorage() {
            localStorageService.set('listaUsuario', vm.lstUser);
        }

    }
})();

