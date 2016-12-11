/**
 * Created by GrandCharles on 10/12/2016.
 */
(function () {
    angular.module('pdApp').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope','$state'];

    function LoginController($scope, $rootScope, $state) {
        var vm = this;
        vm.entidade = {};
        vm.listaUsuario = [];
        vm.nome = 'Charles';

        /** ===================================================================
         vm.setarInformacoesNoStorage = setarInformacoesNoStorage;
        iniciarStorage();
        function iniciarStorage() {
            verificarSuporteAoStorage();

            setarInformacoesNoStorage();
        }

        function verificarSuporteAoStorage() {
            if (!localStorageService.isSupported) {
                AlertService('Desculpe, mas seu navegador não suporta nossa aplicação');
            }
        }

        function setarInformacoesNoStorage() {
            localStorageService.set('listaUsuario', vm.lstUser);
        }


         ===================================================================**/

    }

})();
