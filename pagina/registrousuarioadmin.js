$(function()
    {
        let numeros = '1234567890';
        let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
        $('.txtApellido').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        })
        $('.txtNombre').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        })
        $('.txtTelefono').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        })
    
    
        $('.txtEmail').keypress(function(e)
        {
            let patron = letras + numeros + '@.-';
            let caracter = String.fromCharCode(e.which);
            if(patron.indexOf(caracter) < 0)
                return false;
        })
    
        $('.btnLimpiar').click(function()
        {
            $('.txtNombre, .txtApellido, .txtTelefono, .txtEmail, .txtContraseña, .txtConfirmesucontraseña, .txtFecha').val('');
            $('.txtNombre').focus();
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
    
            else  if(!$.trim($('.txtContraseña').val()))
            {
                alert("El formato del correo no es válido");
                $('.txtContraseña').focus();
            }
    
            else  if(!$.trim($('.txtConfirmesucontraseña').val()))
            {
                alert("El formato del correo no es válido");
                $('.txtConfirmesucontraseña').focus();
            }
    
    
    
        })
    
    
    
    });