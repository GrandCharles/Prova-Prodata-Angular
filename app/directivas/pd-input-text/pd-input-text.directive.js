/**
 * Created by GrandCharles on 26/11/2016.
 *
 * Invocação da diretiva
 * E para nome Elemento
 * A de Atributo
 * C para classe
 * M para comentários
 */

(function () {
    'use strict';

    angular.module('pdApp').directive('pdInputText', pdInputText);

    /* @ngInject */
    function pdInputText() {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-input-text/pd-input-text.html',
            scope: {
                label: '@',
                placeHolder: '@',
                colSpan: '@',
                estilo: '@',
                ngModel: '=',
                tipo: '@'

            },
            link: link /** Compilando **/
        };


        function link(scope, element, attrs) {
            scope.idInputText = 'pdInputText' + scope.$id;
            scope.classColsSpan = 'col-md-' + (scope.colSpan || '3');
            scope.estilo = (scope.estilo || 'width: 200px')
        }
    }

})();


