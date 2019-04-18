//quand la page est chargée (ready)
$(document).ready(function () {
    // je demande de choisir la class color, quand on fait un click
    $('.color').click(function () {
        //je récupère la deuxième classe de l'élément sur lequel j'ai cliqué
        var color=$(this).attr('class').split(' ')[1];
        // je change le text en fonction de la couleur sur la quelle j'ai appuié
        $('#text').css('color',color);
    });
});
