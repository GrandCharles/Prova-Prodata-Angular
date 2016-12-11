/**
 * Created by GrandCharles on 16/11/2016.
 */
(function () {
    angular.module('pdApp').service('AlertService', AlertService);

    AlertService.$inject = ['toastr'];

    function AlertService(toastr) {
        this.success = success;
        this.error = error;
        this.info = info;
        this.alert = alert;

        function success(mensagem, titulo) {
            titulo = titulo || 'Sucesso';
            toastr.success(mensagem, titulo);
        }

        function error(mensagem, titulo) {
            titulo = titulo || 'Erro';
            toastr.error(mensagem, titulo);
        }

        function info(mensagem, titulo) {
            titulo = titulo || 'Info';
            toastr.info(mensagem, titulo);
        }

        function alert(mensagem, titulo) {
            titulo = titulo || 'Alerta';
            toastr.alert(mensagem, titulo);
        }
    }

})();
