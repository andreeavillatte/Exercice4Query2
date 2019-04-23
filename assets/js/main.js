//quand la page est chargée (ready)
$(document).ready(function () {
    // je demande de choisir la class color, quand on fait un click
    // on selectionne tous les eleùments qui ont la classe 'color'
    $('.color').click(function () {
        //je récupère la deuxième classe de l'élément sur lequel j'ai cliqué
        // split aide a separer une chaine de character dans en tableau (creation d'un tableau). On va faire la decupe au niveau d'espace
        // [1] parce que l'indice de l'élément correspond au deuxiéme élément du tableau
        var color=$(this).attr('class').split(' ')[1];
        // var color=$(this).attr('class').slice(-1);
        // je change le text en fonction de la couleur sur la quelle j'ai appuié
        $('#text').css('color',color);
    });
});

// !!!!!!!!!! on pourrais faire cet exercise en utilisant les ID pour les couleur
