$(document).on("ready",inicio)
function inicio()
{
    linksDefault()
    $("#Header").on("click",nostrarHeaderComponentes);
    $("#Footer").on("click",nostrarFooterComponentes);
}
function limpiarContenedorComponentes()
{
    $("#componentes-links-header-content").html("");
}
function actualizarIframe(link)
{
    $("#idIframe").attr("src",link)
}
function nostrarFooterComponentes()
{
    limpiarContenedorComponentes();
    var componentes={
        footer:["gallito","todobusco"]
    }
    for (var key in componentes)
    {
        var componente=key;
        console.log(componente);
        for(var i in componentes[key])
        {
            var nombreComponente=componentes[key][i];
            console.log(nombreComponente);
            var link="../../public/"+componente+"/"+nombreComponente+"/"+componente+".html";
            $("#componentes-links-header-content").append("<span onclick=actualizarIframe('"+link+"') class='link-componente-iframe' href='../../public/"+componente+"/"+nombreComponente+"/"+componente+".html' >"+componente +" - "+ nombreComponente+"</span>")
        }
    }
}
function nostrarHeaderComponentes()
{
    limpiarContenedorComponentes();
    var componentes={
        header:["gallito","todobusco"]
    }
    for (var key in componentes)
    {
        var componente=key;
        console.log(componente);
        for(var i in componentes[key])
        {
            var nombreComponente=componentes[key][i];
            console.log(nombreComponente);
            var link="../../public/"+componente+"/"+nombreComponente+"/"+componente+".html";
            $("#componentes-links-header-content").append("<span onclick=actualizarIframe('"+link+"') class='link-componente-iframe' href='../../public/"+componente+"/"+nombreComponente+"/"+componente+".html' >"+componente +" - "+ nombreComponente+"</span>")
        }
    }
}
function linksDefault()
{
     var componentes={
        header:["gallito","todobusco"],
        footer:["gallito","todobusco"]
    }
    for (var key in componentes)
    {
        var componente=key;
        console.log(componente);
        for(var i in componentes[key])
        {
            var nombreComponente=componentes[key][i];
            console.log(nombreComponente);
            $("#componentes-links-header-content").append("<span onclick='' class='link-componente-iframe' href='../../public/"+componente+"/"+nombreComponente+"/"+componente+".html' >"+componente +" - "+ nombreComponente+"</span>")
        }
    }
}