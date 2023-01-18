$(document).ready(function() {
            $("#meuForm").validate({
                rules: {
                    email:{
                        required:true,
                        email:true
                    }
                },
                messages: {
			campo_email: "Email Invalido"

                    
                }
            });
            
             $("#meuFormulario").validate({
                rules: {
                    email:{
                        required:true,
                        email:true
                    }
                },
                messages: {
			campo_email: "Email Invalido"

                    
                }
            });
            
            $("#cep").mask("99999-999");
        });

