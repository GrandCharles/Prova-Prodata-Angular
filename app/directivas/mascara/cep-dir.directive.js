/**
 * Created by GrandCharles on 08/12/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp').directive('cepDir', cepDir);

    function cepDir() {
        return {
            link : function(scope, element, attrs) {
                var options = {
                    onKeyPress: function(val, e, field, options) {
                        putMask();
                    }
                }

                $(element).mask('00000-000', options);

                function putMask() {
                    var mask;
                    var cleanVal = element[0].value.replace(/\D/g, '');//pega o valor sem mascara


                    if(cleanVal.length > 8) {//verifica a quantidade de digitos.
                        mask = "00000-000";
                    } else {
                        mask = "00000-0009";
                    }

                    $(element).mask(mask, options);//aplica a mascara novamente
                }
            }
        }
    }

})();