angular.module('libreria.controllers')
.controller("librosController", function($scope, librosFactory, $ionicModal){
	$scope.titulo = "Bienvenido a la libreria";
	$scope.libros = librosFactory.getLibros();
	$scope.libro = {};
	console.log($scope.libros);

	$ionicModal.fromTemplateUrl('module/libros/libro-modal_view.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.abrirDetalle = function(id) {
	$scope.libro = librosFactory.getLibro(id);
    $scope.modal.show();
  };
  $scope.cerrarModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

})
