/**
 * Created by GrandCharles on 26/11/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp').directive('pdPanel', pdPanel);

    /* @ngInject */
    function pdPanel() {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-panel/pd-panel.html',
            transclude: {
                header: '?pdPanelHeader',
                body: '?pdPanelBody',
                footer: '?pdPanelFooter'
            },
            scope: {
                classPanel: '@',
                exibirHeader: '=',
                descHeader: '@',
                exibirFooter: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.idInputPanel = 'pdPanel' + scope.$id;
            scope.classPanel = scope.classPanel || 'panel-default';
            scope.descHeader = scope.descHeader;
        }
    }

})();



