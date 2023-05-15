$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.txtRut').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtDv').keypress(function(e)
    {
        let patron = numeros + 'kK';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })
    $('.txtNombre').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.txtEmail').keypress(function(e)
    {
        let patron = letras + numeros + '@._-';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })

    $('.btnLimpiar').click(function()
    {
        $('.txtNombre, .txtApellido, .txtTelefono, .txtEmail, .txtContraseña, .txtConfirmesucontraseña').val('');
        $('.txtRut').focus();
    });


    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

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
        else  if(!emailRegex.test(($('.txtEmail').val())))
        {
            alert("El formato del correo no es válido");
            $('.txtEmail').focus();
        }


        
    })

     

});