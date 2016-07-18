class ModalGallitoCuenta{
	constructor()
	{
		this.validar()
	}
	validar()
	{
	
		$("#register-form").validate({
                rules: {
                    emailModalLogin: {
                    	required:true,
                    }                    
                },
                messages: {
                    emailModalLogin: {
                        required: "Este campo es requerido"
                    }
                },
                 highlight: function (element) {
	                if ($(element).attr('type') === 'checkbox') {
	                    $(element).siblings('span').addClass('error');
	                }
	                else if($(element).attr('type') === 'radio'){
	                     $(element).parent().removeClass('spanEpass');
	                     $(element).parent().siblings().removeClass('spanEpass');
	                     $(element).parent().parent().addClass('error');
	                }else{

	                    $(element).addClass('error-validacion');
	//                    $("#txtNumDocumento").siblings("div").children("div").css("display","block");
	                }
	                
	            },
	            unhighlight: function (element) {
	                if ($(element).attr('type') === 'checkbox') {
	                    $(element).siblings('span').removeClass('error');
	                }
	                else if($(element).attr('type') === 'radio'){
	                     $(element).parent().addClass('spanEpass');
	                     $(element).parent().siblings().addClass('spanEpass');
	                     $(element).parent().parent().removeClass('error');
	                }else{
	                    $(element).removeClass('error-validacion');
	//                    $("#txtNumDocumento").siblings("div").children("div").css("display","none");
	                }
	                
	            },            
	            errorPlacement: function(error, element) {
	                ocultarPreloader();
	                if ($(element).attr('name') == 'txtNumDocumento') {
	                    var placement = $(element).parent();
	                    if (placement) {
	                        $(placement).append(error);
	                    } else {
	                        error.insertAfter(element);
	                    }
	                }
	               $("#div_errores").html("<div class='error'>Debe completar los campos obligatorios</div>");
	            }
            });
	}
}
