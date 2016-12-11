/**
 * Created by GrandCharles on 16/11/2016.
 */
(function () {
    angular.module('pdApp').filter('Maiusculo', Maiusculo);

    function Maiusculo() {
        return function (input) {
            if (!input) {
                return '';
            }
            return input.toUpperCase();
        }
    }

})();