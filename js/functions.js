/*
    show menu
*/
function showMenu()
{
    $('.icon_menu_first').toggleClass('icon_menu_first_active');
    $('.icon_menu_second').toggleClass('icon_menu_second_active');
    $('.icon_menu_third').toggleClass('icon_menu_third_active');
    $('nav').toggleClass('menu_active');
}

/*
    voir projet
*/
function voirProjet(e)
{
    console.log(e)
    if ($('nav').attr('class') == 'menu_active')
    {
        showMenu();
    }

    const id = $(e).attr('id');
    idDescription = id;
    const idProject = '._' + id;
    const _overlay = $('._overlay');
    const _descriptionProjects = $('._description_projets');
    const _showDescription = $(idProject);
   
    $('html').toggleClass('_overflow');
    $(_descriptionProjects).toggleClass('_description_projets_active');
    $(_showDescription).toggleClass('_show_description');
    $(_overlay).toggleClass('_overlay_active');
    indicator = true;
}

/*
    fermer projet
*/
function fermerProjet()
{
    if (indicator == true)
    {
        idDescription = '_' + idDescription;
        const _overlay = $('._overlay');
        const _descriptionProjects = $('._description_projets');
        const _showDescription = $('.'+idDescription);

        $('html').toggleClass('_overflow');
        $(_descriptionProjects).toggleClass('_description_projets_active');
        setTimeout(()=>{$(_showDescription).toggleClass('_show_description')},400);
        $(_overlay).toggleClass('_overlay_active');
        indicator = false;
    }
}

/*
    liens projets
*/
function liensProjets(e)
{
    window.open($(e).attr('data-link'));
}

/*
    voir img
*/

function voirImg(e)
{
    window.open(window.location.origin + '/portfolio/' + e.getAttribute('src'));
}