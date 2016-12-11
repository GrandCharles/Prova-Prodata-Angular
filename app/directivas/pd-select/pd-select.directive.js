/**
 * Created by GrandCharles on 10/12/2016.
 */

(function () {
    'use strict';

    angular.module('pdApp').directive('pdSelect', pdSelect);

    function pdSelect() {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-select/pd-select.html',
            scope: {
                ngModel:'=',
                provider:'=',
                ngRequired:'=',
                propriedadeDescricao:'@',
                propriedadeValor:'@',
                colspan:'@',
                label:'@',
                primeiraOpcao:'@'
            },
            link: link
        };

        function link(scope, element, attrs){
            scope.idInputSelect = 'pdSelect' + scope.$id;

            scope.classColspan = 'col-md-' + (scope.colspan || '3');
            scope.propriedadeDescricao = scope.propriedadeDescricao || 'descricao';
            scope.propriedadeValor = scope.propriedadeValor || 'valor';
        }
    }
})();