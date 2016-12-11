/**
 * Created by GrandCharles on 10/12/2016.
 */
(function () {
    angular.module('pdApp').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        var cadastroUsuario = {
            name: 'cadastroUsuario ',
            url: '/cadastro-usuario',
            templateUrl: 'app/views/usuario/cadastro-usuario.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/usuario/cadastro-usuario.controller.js');
                }
            }
        };


        var loginUsuario = {
            name: 'loginUsuario ',
            url: '/login-usuario',
            templateUrl: 'app/views/login/login.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/login/login.controller.js');
                }
            }
        };


        var blank = {
            name: '',
            url: '',
            templateUrl: 'app/template/blank.html'
        };


        $stateProvider
            .state('loginUsuario', loginUsuario)
            .state('cadastroUsuario', cadastroUsuario)
            .state('blank', blank)
    }

})();