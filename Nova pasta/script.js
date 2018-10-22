
var i = setInterval(function () {
    
    clearInterval(i);
  
    
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 2000);

$.get('https://jsonplaceholder.typicode.com/users', function (c) {
    $.each(c, function (i, v) {

    	if (v.name != 'Patricia Lebsack') {

	        $('.resultados').append('<div class="name">' + v.name + '</div>');
	    }
    });

});
$.get('https://jsonplaceholder.typicode.com/users', function (c) {
    $.each(c, function (i, v) {

    	if (v.email != 'Julianne.OConner@kory.org') {

	        $('.resultadosemail').append('<div class="email">' + v.email + '</div>');
	    }
    });

});


