$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.txtFoliodetalle').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let patron = numeros;
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
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
        $('.txtFoliodetalle, .txtDv, .txtNombre, .txtEmail').val('');
        $('.txtRut').focus();
    });


    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

    $('.btnAceptar').click(function()
    {
        if(!$.trim($('.txtFoliodetalle').val()))
        {
            alert("Debe especificar rut");
            $('.txtFoliodetalle').focus();
        }
        else  if(!$.trim($('.txtDv').val()))
        {
            alert("Debe especificar dv");
            $('.txtDv').focus();
        }
        else  if(! esValidoElRut($('.txtRut').val(),$('.txtDv').val()))
        {
            alert("El rut no es válido");
            $('.txtRut').focus();
        }
        else  if(!$.trim($('.txtNombre').val()))
        {
            alert("Debe especificar nombre");
            $('.txtNombre').focus();
        }
        else  if(!$.trim($('.txtEmail').val()))
        {
            alert("Debe especificar email");
            $('.txtEmail').focus();
        }
        else  if(!emailRegex.test(($('.txtEmail').val())))
        {
            alert("El formato del correo no es válido");
            $('.txtEmail').focus();
        }

    })

   
});