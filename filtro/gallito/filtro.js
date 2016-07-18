class FiltroGallito{
	constructor()
	{
		$(".fliter-arrow-down").on("click",this.desplegar);
		$(".icon-close").on("click",this.eliminarFiltro);
		$("#range_03").ionRangeSlider({
		    type: "double",
		    grid: true,
		    min: 0,
		    max: 5000,
		    from: 0,
		    to: 5000,
		    prefix: "$"
		});
	}
	desplegar()
	{
		$(this).parent().siblings(".cont-filter-gallito").slideToggle("fast");
	}
	eliminarFiltro()
	{
		$(this).parent().remove();
	}
}
$(document).on("ready",inicio)
function inicio()
{
	var obj = new FiltroGallito();	
}
