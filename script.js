jQuery(".yv-start").click(function() {
    
    /* Neste primeiro exemplo estou alterando o texto do último item do header */
    jQuery(".yv-header .yv-items:last").text("item 3")

        /* Neste segundo exemplo estou inserindo nosso bloco de reviews após a descrição do produto */
        jQuery(".yv-wrapper .yv-description").after("<div class='yv-reviews'>Bloco de avaliações <i class='fas fa-pencil-alt'></i></div>");

        /* Neste terceiro exemplo estou inserindo uma imagem após o segundo item do footer */
        jQuery(".yv-footer .yv-selos:nth-child(2)").after("<li class='yv-selos'> <img src='//service.yourviews.com.br/Image/gacadeb7-b221-4bf2-a8b8-1fb9da3de96d/Footer.jpg' title='Loja Confiável' alt='Loja Confiável' style='width: 38px; height: 41px;'/></li>")
});