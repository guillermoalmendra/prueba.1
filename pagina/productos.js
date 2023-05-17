$(function()
    {
        let numeros = '1234567890';
        let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
        $('.txtNombredeproducto').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        })
        $('.txtValorproducto').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        })
        $('.txtIDproducto').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        })
    
    
        $('.txtID producto').keypress(function(e)
        {
            let patron = numeros ;
            let caracter = String.fromCharCode(e.which);
            if(patron.indexOf(caracter) < 0)
                return false;
        })
    
        $('.btnLimpiar').click(function()
        {
            $('.txtNombredeproducto, .txtIDproducto, .txtValorproducto, .txtCantidadproductoscomprados').val('');
            $('.txtNombredeproducto').focus();
        });
    
    
        let emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.([a-zA-Z]{2,4})+$/
    
        $('.btnRegistrar').click(function()
        {
    
            if(!$.trim($('.txtNombre').val()))
            {
                alert("Debe especificar nombre");
                $('.txtNombre').focus();
            }
            else  if(!$.trim($('.txtApellido').val()))
            {
                alert("Debe especificar apellido");
                $('.txtApellido').focus();
            }
            else  if(!$.trim($('.txtTelefono').val()))
            {
                alert("Debe especificar telefono");
                $('.txtTelefono').focus();
            }
    
            else  if(!emailRegex.test(($('.txtEmail').val())))
            {
                alert("El formato del correo no es válido");
                $('.txtEmail').focus();
            }
    
            

    
        })
    
    
    
    });