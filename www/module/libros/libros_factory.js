angular.module("libreria.factories")
.factory("librosFactory", function($filter){
	return{
		getLibros : getLibros,
		getLibro:getLibro
	}

	function getLibros(){
		return [
		{
			'id':'1',
			'titulo':'Moral Relativ',
			'autor':"Steve Luke",
			'portada':'img/libro_1.jpg',
			'descripcion': 'David Lynch es el artista-médium de nuestra época. Su obra es el espejo de un mundo desconcertante, habitado por diversas y contradictorias versiones de nosotros mismos. De ello es buena muestra Twin Peaks, una especie de culebrón que alojaba dimensiones auténticamente terroríficas pese a emitirse en horario de máxima audiencia. Pues bien, poco antes de que en mayo de este año se iniciara la tercera entrega en España, han salido dos libros dedicados a la serie. No están solos: Internet y las redes sociales se han incendiado con voces que parecen salidas del propio Twin Peaks, el pequeño pueblo aislado entre bosques donde la muerte de Laura Palmer revela los peores instintos, el otro lado de los habitantes de la comunidad. '
		},{
			'id':'2',
			'titulo':'The devil in the flesh',
			'autor':"Raimont Radiguet",
			'portada':'img/libro_3.jpg',
			'descripcion':'El fenotipo extendido (1982) es la continuación, ligeramente corregida y considerablemente ampliada, de El gen egoísta (1976), la primera y, con mucho, más popular de las obras de Richard Dawkins, adelantada en la floreciente empresa divulgadora del pensamiento evolutivo que, hasta entonces, estaba mayormente circunscrito al estricto dominio académico .'
		},{
			'id':'3',
			'titulo':'Anything that moves',
			'autor':"Data Goodyear",
			'portada':'img/libro_4.jpg',
			'descripcion':'El fenotipo extendido (1982) es la continuación, ligeramente corregida y considerablemente ampliada, de El gen egoísta (1976), la primera y, con mucho, más popular de las obras de Richard Dawkins, adelantada en la floreciente empresa divulgadora del pensamiento evolutivo que, hasta entonces, estaba mayormente circunscrito al estricto dominio académico .'

		},{
			'id':'4',
			'titulo':'Conviction',
			'autor':"Kelly Gilbert",
			'portada':'img/libro_5.jpg',
			'descripcion':'El fenotipo extendido (1982) es la continuación, ligeramente corregida y considerablemente ampliada, de El gen egoísta (1976), la primera y, con mucho, más popular de las obras de Richard Dawkins, adelantada en la floreciente empresa divulgadora del pensamiento evolutivo que, hasta entonces, estaba mayormente circunscrito al estricto dominio académico .'
		}]
	}

	function getLibro(idL){
		var libros = getLibros();
		var filternotif = $filter("filter")(libros, {
			id : idL
		});	

		return 	filternotif;

	}
})