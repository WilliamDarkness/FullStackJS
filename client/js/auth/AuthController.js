(function(){
    'use strict';

    angular
        .module('app')
        .controller('AuthController', AuthController);

    function AuthController($state){

        var vm = this;

        angular.extend(vm, {
            title: "Enter credentials of fuck off",
            loginInput: this.loginInput,
            passwordInput: this.passwordInput,
            login: "balkon94",
            password: "qwerty",
            tryLogin: tryLogin,
            credentialsAreTrue: credentialsAreTrue
        });

        function tryLogin(){
            if(vm.loginInput === vm.login && vm.passwordInput === vm.password){
                localStorage.setItem("userName", vm.login);
                localStorage.setItem("authToken", "yes");
                $state.go('main');
            }
        }

        function credentialsAreTrue(){
            if(vm.loginInput === vm.login && vm.passwordInput === vm.password){
                return false;
            }else{
                return true;
            }
        }

        (function(){
            if(localStorage.getItem("authToken") === "yes"){
                $state.go('main');
            }
        })();

    }
})();