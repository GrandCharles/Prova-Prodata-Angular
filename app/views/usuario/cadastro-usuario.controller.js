/**
 * Created by GrandCharles on 10/12/2016.
 */
(function () {

    angular.module('pdApp').controller('CadastroUsuarioController', CadastroUsuarioController);

    CadastroUsuarioController.$inject = ['$scope', '$state', 'AlertService', '$filter', 'localStorageService'];

    function CadastroUsuarioController($scope, $state, AlertService, $filter, localStorageService) {
        var vm = this;
        var incluir = true;

        vm.entidade = {};

        vm.listaUser = [];

        iniciarStorage();

        vm.gridOptions = {
            columnDefs: [
                {name: 'Codigo', field: 'codigo', width: 70},
                {name: 'Nome', field: 'nome', width: 190},
                {name: 'Login', field: 'login', width: 150},
                {name: 'E-Mail', field: 'email', width: 250},
                {
                    name: 'Dt.Validade',
                    field: 'dtVal',
                    cellTemplate: 'app/template/grid/cell-template-date.html',
                    width: 100
                },
                {name: 'Tp', field: 'tpUser', width: 50},

                {name: 'E', field: 'editar', cellTemplate: 'app/template/grid/cell-template-editar.html', width: 35},
                {name: 'X', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 35}

            ],
            data: 'vm.listaUser',
            enableColumnMenus: false
        };

        vm.tpUser = [
            {valor: 'S', descricao: 'Supervisor'},
            {valor: 'N', descricao: 'Normal'}
        ];


        vm.salvar = salvar;
        function salvar() {
            if ($scope.usuarioForm.$invalid) {
                $scope.usuarioForm.nmCodigo.$setTouched();
                $scope.usuarioForm.nmNome.$setTouched();
                $scope.usuarioForm.nmLogin.$setTouched();
                $scope.usuarioForm.nmEmail.$setTouched();
                $scope.usuarioForm.nmSenha1.$setTouched();
                $scope.usuarioForm.nmSenha2.$setTouched();

                AlertService.error('Formulário apresenta erros de preenchimento!');

                return;
            }

            if (vm.entidade.senha1 != vm.entidade.senha2){
                AlertService.error('Senhas não conferem!');

                return;
            }


            if (incluir) {
                vm.entidade.nome = $filter('Maiusculo')(vm.entidade.nome);
                vm.entidade.login = $filter('Maiusculo')(vm.entidade.login);

                vm.listaUser.push(vm.entidade);

                setarInformacoesNoStorage();

                AlertService.success('Salvo com Sucesso!');
            } else {

                AlertService.success('Alterado com sucesso!');
            }

            novo();
        }


        vm.novo = novo;
        function novo() {
            $scope.usuarioForm.$setUntouched();

            vm.entidade = {};
            incluir = true;
        }

        vm.voltar = voltar;
        function voltar() {
            $scope.usuarioForm.$setUntouched();

            abrirPag('blank');
        }


        vm.excluir = excluir;
        function excluir(linha) {
            var index = vm.listaUser.indexOf(linha);

            vm.listaUser.splice(index, 1)

            setarInformacoesNoStorage();

            novo();
        }


        vm.editar = editar;
        function editar(linha) {
            vm.entidade = linha;
            vm.entidade.dtVal = new Date(vm.entidade.dtVal);

            incluir = false;

            angular.element('#nmCodigo').focus();
        }


        vm.abrirPag = abrirPag;
        function abrirPag(nomeState) {
            $state.go(nomeState);
        }

        /** =================================================================== **/

        function iniciarStorage() {
            verificarSuporteAoStorage();

            vm.listaUser = localStorageService.get('listaUsuario');
        }

        function verificarSuporteAoStorage() {
            if (!localStorageService.isSupported) {
                alert('Desculpe, mas seu navegador não suporta nossa aplicação');
            }
        }

        function setarInformacoesNoStorage() {
            localStorageService.set('listaUsuario', vm.listaUser);
        }


        /**===================================================================**/


    }

})();
