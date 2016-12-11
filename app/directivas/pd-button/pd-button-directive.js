/**
 * Created by GrandCharles on 26/11/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp').directive('pdButton', pdButton);

    /* @ngInject */
    function pdButton(AlertService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-button/pd-button.html',
            transclude: true,
            scope: {
                titulo: '@',
                salvar: '&',
                novo: '&',
                voltar: '&',
                excluir: '&',
                exibirBotaoSalvar: '=',
                exibirBotaoNovo: '=',
                exibirBotaoVoltar: '=',
                exibirBotaoExcluir: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdButtonForm' + scope.$id;

            /*
            iniciar();

            function iniciar() {
                if (!attrs.salvar) {
                    AlertService.error('Programador, você não informou a função salvar');
                }
            }
            */
        }
    }

})();


