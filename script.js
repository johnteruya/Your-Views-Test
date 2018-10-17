$.get('https://jsonplaceholder.typicode.com/users', function (c) {
    $.each(c, function (i, v) {
        $('.resultados').append('<div class="name">' + v.name + '</div>');
    });

});
